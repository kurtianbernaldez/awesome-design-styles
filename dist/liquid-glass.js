import {createLensMap,advanceSpring} from './liquid-optics.js';
import {samplePointer,pointerEnergy,sweptSurface} from './pointer-kinetics.js';
import {materialForBackdrop,sampleBackdrop,readToken,rgbCss} from './liquid-adaptation.js';
import {createLiquidTransitions} from './liquid-transitions.js';
export {createLensMap,advanceSpring} from './liquid-optics.js';

// Deform a separate material body; its host, labels, and hit targets never move.
export function createLiquidGlass(root) {
  const strip=document.querySelector('.demo-tabs');
  const menu=document.querySelector('.demo-menu'),dialog=document.querySelector('dialog'),nav=document.querySelector('.demo-nav');
  const scrollEdge=document.createElement('span');scrollEdge.className='liquid-scroll-edge';scrollEdge.setAttribute('aria-hidden','true');document.body.append(scrollEdge);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const transparency=matchMedia('(prefers-reduced-transparency: reduce)');
  const contrast=matchMedia('(prefers-contrast: more)');
  const forced=matchMedia('(forced-colors: active)');
  const ns='http://www.w3.org/2000/svg';
  const svg=document.createElementNS(ns,'svg');
  svg.setAttribute('aria-hidden','true');svg.setAttribute('width','0');svg.setAttribute('height','0');svg.classList.add('liquid-optics');
  const defs=document.createElementNS(ns,'defs');svg.append(defs);document.body.append(svg);
  const records=new Map(),moving=new Set();
  let active=false,current=null,frame=0,last=0,serial=0,settings,lastScroll=scrollY,input=null,geometryRevision=0,adaptFrame=0;
  const spring=()=>({value:0,velocity:0});
  const scene={x:spring(),y:spring(),tx:0,ty:0};
  const variants={
    'clear-lens':{kind:'clear',refraction:56,blur:.35,saturation:1.05,flex:5},
    'frosted-controls':{kind:'regular',refraction:34,blur:4,saturation:1.05,flex:3.5},
    'fluid-dock':{kind:'regular',refraction:52,blur:.7,saturation:1.08,flex:5},
  };
  let optedOut=false;try{optedOut=localStorage.getItem('design-pointer-effects')==='off';}catch{}
  const canMove=()=>active&&!reduced.matches&&!transparency.matches&&!contrast.matches&&!forced.matches&&!optedOut;
  const node=(tag,attrs)=>{const el=document.createElementNS(ns,tag);for(const [key,value]of Object.entries(attrs))el.setAttribute(key,value);return el;};
  const transitions=createLiquidTransitions({menu,dialog,recordFor:host=>records.get(host),canMove,
    onContext:(host,source)=>{const record=records.get(host);if(record){record.context=sampleBackdrop(source,readToken(root,'--canvas')?.rgb);record.tone=undefined;}},
    onExpand:(host,open)=>{const record=records.get(host);if(record){measure(record);record.expanded=open?1:0;if(canMove()){moving.add(record);schedule();}else{record.reveal.value=record.expanded;paintOptics(record,settings.refraction+record.expanded*6);}requestAdaptation();}}
  });
  function requestAdaptation(){if(active&&!adaptFrame)adaptFrame=requestAnimationFrame(adapt);}
  function adapt(){
    adaptFrame=0;if(!active)return;
    const fallback=readToken(root,'--canvas')?.rgb||[230,239,244];
    // Gather backdrop reads before writing colors to avoid layout/style thrashing.
    const updates=[];
    for(const record of records.values()){
      const rect=record.host.getBoundingClientRect();if(!rect.width||!rect.height||rect.bottom<0||rect.top>innerHeight)continue;
      const samples=record.large&&record.context?record.context:sampleBackdrop(record.host,fallback);
      const material=materialForBackdrop(samples,{kind:settings.kind,large:record.large,tone:record.tone,accent:record.host.matches('.actions>.primary')?readToken(root,'--accent')?.rgb:undefined});
      updates.push({record,material});
    }
    for(const {record,material:m}of updates){
      record.tone=m.tone;record.host.dataset.materialTone=m.tone;record.host.dataset.materialKind=settings.kind;
      const values={'--material-fill':rgbCss(m.fill,m.alpha),'--material-contact-fill':rgbCss(m.fill,m.contactAlpha),'--material-solid':rgbCss(m.solid||m.fill),'--material-ink':rgbCss(m.ink),'--material-ambient':rgbCss(m.ambient,.22),'--material-shadow':String(m.shadow),'--material-edge':rgbCss(m.solid||m.fill,.97)};
      for(const [name,value]of Object.entries(values))if(record.host.style.getPropertyValue(name)!==value)record.host.style.setProperty(name,value);
    }
    const n=nav.getBoundingClientRect(),sticky=getComputedStyle(nav).position==='sticky';
    const engaged=sticky&&settings.kind!=='clear'&&scrollY>24&&n.top<24;
    root.style.setProperty('--liquid-nav-height',n.height+'px');scrollEdge.hidden=!engaged;
    if(engaged){scrollEdge.style.height=(n.bottom+30)+'px';scrollEdge.style.setProperty('--scroll-edge-color',nav.style.getPropertyValue('--material-edge')||rgbCss(fallback,.97));scrollEdge.style.opacity=String(Math.min(1,(scrollY-24)/72));}
  }
  function paintOptics(record,amount) {
    const scale=Math.max(settings.refraction,Math.min(settings.refraction+24,settings.refraction+Math.round((amount-settings.refraction)/2)*2));
    const contact=Math.max(0,Math.min(1,(record.p.value-.32)/.68));
    const blur=Math.round((settings.blur*(record.large?1:1-contact*.65)+(record.large?record.reveal.value*4:0))*20)/20;
    if(scale===record.lastOpticalScale&&blur===record.lastBlur)return;
    const next=record.opticalFilters.get(scale);if(!next)return;
    record.lastOpticalScale=scale;record.lastBlur=blur;record.filter=next;
    // Scatter before lensing, so the curved boundary remains crisp.
    record.body.style.setProperty('--liquid-filter',`blur(${blur}px) url(#${next.id}) saturate(${settings.saturation})`);
  }
  function measure(record) {
    const w=record.host.clientWidth,h=record.host.clientHeight;
    if(!w||!h)return;
    const style=getComputedStyle(record.host),radius=Math.min(parseFloat(style.borderTopLeftRadius)||32,w/2,h/2);
    if(record.w===w&&record.h===h&&record.radius===radius)return;
    if(!record.w){record.lx.value=record.lightX=w*.3;record.ly.value=record.lightY=h*.1;}
    Object.assign(record,{w,h,radius});
    const map=createLensMap(w,h,radius,settings.refraction+24),canvas=document.createElement('canvas');
    canvas.width=map.width;canvas.height=map.height;
    canvas.getContext('2d').putImageData(new ImageData(map.data,map.width,map.height),0,0);
    // Immutable graphs avoid Chromium's mutable-SVG backdrop cache and avoid
    // cloning filters in animation frames. Each body has at most 13 strengths,
    // all sharing one map image. Resize replaces this bounded set in one batch.
    const template=record.filter.cloneNode(true),image=template.querySelector('feImage');
    for(const el of [template,image]){el.setAttribute('width',w);el.setAttribute('height',h);}
    image.setAttribute('href',canvas.toDataURL());
    const nextFilters=new Map(),fragment=document.createDocumentFragment();record.opticalVersion++;
    for(let step=0;step<=12;step++){
      const filter=template.cloneNode(true),scale=settings.refraction+step*2;
      filter.id=`${record.baseId}-${record.opticalVersion}-${step}`;
      filter.querySelector('feDisplacementMap').setAttribute('scale',scale);
      nextFilters.set(scale,filter);fragment.append(filter);
    }
    for(const filter of record.opticalFilters.values())filter.remove();
    defs.append(fragment);record.opticalFilters=nextFilters;
    record.body.style.borderRadius=radius+'px';geometryRevision++;
    record.lastOpticalScale=undefined;paintOptics(record,settings.refraction);
  }
  function surfaceRect(record){
    if(record.geometryRevision!==geometryRevision){record.rect=record.host.getBoundingClientRect();record.geometryRevision=geometryRevision;}
    return record.rect;
  }
  function updateSelection() {
    if(!active)return;
    const selected=strip.querySelector('[aria-selected="true"]');
    strip.style.setProperty('--segment-x',selected.offsetLeft+'px');strip.style.setProperty('--segment-width',selected.offsetWidth+'px');strip.style.setProperty('--segment-height',selected.offsetHeight+'px');
    const record=records.get(strip);if(record&&canMove()){record.p.velocity+=3;moving.add(record);schedule();}
  }
  const observer=new ResizeObserver(entries=>{
    for(const {target}of entries){const record=records.get(target);if(record)measure(record);}
    requestAdaptation();
    if(active){const selected=strip.querySelector('[aria-selected="true"]');strip.style.setProperty('--segment-x',selected.offsetLeft+'px');strip.style.setProperty('--segment-width',selected.offsetWidth+'px');strip.style.setProperty('--segment-height',selected.offsetHeight+'px');}
  });
  function schedule(){if(!frame){last=performance.now();frame=requestAnimationFrame(tick);}}
  function rest(record){
    for(const s of [record.x,record.y,record.p]){s.value=0;s.velocity=0;}
    record.lx.value=record.lightX=(record.w||0)*.3;record.ly.value=record.lightY=(record.h||0)*.1;
    record.lx.velocity=record.ly.velocity=0;
    record.tx=record.ty=record.tp=0;record.body.style.transform='none';record.body.style.borderRadius=record.radius+'px';
    record.reveal.value=record.expanded;record.reveal.velocity=0;
    record.body.style.setProperty('--liquid-energy','0');record.body.style.setProperty('--liquid-clarity','0%');paintOptics(record,settings.refraction+record.reveal.value*6);
    record.body.style.setProperty('--liquid-light-x','30%');record.body.style.setProperty('--liquid-light-y','10%');
  }
  function reset(){
    cancelAnimationFrame(frame);frame=0;moving.clear();current=null;input=null;
    for(const record of records.values())rest(record);
    for(const s of [scene.x,scene.y]){s.value=0;s.velocity=0;}scene.tx=scene.ty=0;
    root.style.setProperty('--liquid-scene-x','0px');root.style.setProperty('--liquid-scene-y','0px');delete root.dataset.liquidAnimating;
  }
  function syncPreferences(){transitions.finish();root.dataset.liquidMotion=canMove()?'on':'off';reset();requestAdaptation();}
  function tick(now) {
    frame=0;geometryRevision++;if(!canMove()){reset();return;}
    const dt=Math.min((now-last)/1000,1/30);last=now;let unsettled=false;
    for(const record of moving){
      const targetPressure=record.tp+(record===current?pointerEnergy(input,now)*.85:0);
      advanceSpring(record.x,record.tx,dt);advanceSpring(record.y,record.ty,dt);advanceSpring(record.p,targetPressure,dt);
      advanceSpring(record.lx,record.lightX,dt);advanceSpring(record.ly,record.lightY,dt);
      advanceSpring(record.reveal,record.expanded,dt);
      const energy=Math.max(0,Math.min(1.5,record.p.value));
      const contact=Math.max(0,Math.min(1,(energy-.32)/.68));
      const stretch=Math.max(-.045,Math.min(.045,record.x.velocity*.002+energy*.012));
      const squeeze=Math.max(-.045,Math.min(.045,record.y.velocity*.002-contact*.028));
      const x=Math.max(-5,Math.min(5,record.x.value)),y=Math.max(-5,Math.min(5,record.y.value));
      record.body.style.transform=`translate(${x.toFixed(3)}px,${y.toFixed(3)}px) scale(${1+stretch},${1+squeeze})`;
      const r=record.radius,bend=record.y.value*.65;record.body.style.borderRadius=`${r+bend}px ${r-bend}px ${r+bend*.5}px ${r-bend*.5}px`;
      record.body.style.setProperty('--liquid-energy',energy.toFixed(3));
      record.body.style.setProperty('--liquid-clarity',(contact*100).toFixed(1)+'%');
      record.body.style.setProperty('--liquid-spread',(100+energy*120).toFixed(1)+'px');
      record.body.style.setProperty('--liquid-light-x',record.lx.value.toFixed(2)+'px');record.body.style.setProperty('--liquid-light-y',record.ly.value.toFixed(2)+'px');
      paintOptics(record,settings.refraction+Math.min(24,record.reveal.value*6+energy*20+Math.min(6,Math.hypot(record.x.velocity,record.y.velocity)*.2)));
      if(record.reveal.velocity!==0||record.reveal.value!==record.expanded||record.x.velocity!==0||record.x.value!==record.tx||record.y.velocity!==0||record.y.value!==record.ty||record.p.velocity!==0||record.p.value!==targetPressure||targetPressure!==record.tp||record.lx.velocity!==0||record.lx.value!==record.lightX||record.ly.velocity!==0||record.ly.value!==record.lightY)unsettled=true;else moving.delete(record);
    }
    advanceSpring(scene.x,scene.tx,dt);advanceSpring(scene.y,scene.ty,dt);
    root.style.setProperty('--liquid-scene-x',scene.x.value.toFixed(3)+'px');root.style.setProperty('--liquid-scene-y',scene.y.value.toFixed(3)+'px');
    unsettled ||= scene.x.velocity!==0||scene.y.velocity!==0||scene.x.value!==scene.tx||scene.y.value!==scene.ty;
    if(unsettled){root.dataset.liquidAnimating='';frame=requestAnimationFrame(tick);}else delete root.dataset.liquidAnimating;
  }
  function release(){
    if(current){current.tx=current.ty=current.tp=0;moving.add(current);current=null;}
    input=null;scene.tx=scene.ty=0;if(canMove())schedule();
  }
  function setTheme(theme) {
    transitions.finish();reset();observer.disconnect();cancelAnimationFrame(adaptFrame);adaptFrame=0;scrollEdge.hidden=true;
    for(const record of records.values()){record.body.remove();record.host.classList.remove('liquid-surface','liquid-ready');delete record.host.dataset.materialTone;delete record.host.dataset.materialKind;for(const name of ['--material-fill','--material-contact-fill','--material-solid','--material-ink','--material-ambient','--material-shadow','--material-edge'])record.host.style.removeProperty(name);}
    records.clear();defs.replaceChildren();
    active=theme.startsWith('liquid-glass/');root.dataset.liquidMotion=canMove()?'on':'off';delete root.dataset.liquidKind;if(!active)return;settings=variants[theme.split('/')[1]];root.dataset.liquidKind=settings.kind;
    const selectors=settings.kind==='clear'?'.demo-nav,.workspace-controls':'.demo-nav,.workspace-controls,.demo-tabs,.demo-menu>div,dialog,.actions>.primary';
    for(const host of document.querySelectorAll(selectors)){
      host.classList.add('liquid-surface');const id='liquid-refraction-'+(++serial);
      const filter=node('filter',{id,x:0,y:0,width:1,height:1,filterUnits:'userSpaceOnUse',primitiveUnits:'userSpaceOnUse','color-interpolation-filters':'sRGB'});
      const map=node('feImage',{width:'100%',height:'100%',preserveAspectRatio:'none',result:'map'});
      const displacement=node('feDisplacementMap',{in:'SourceGraphic',in2:'map',scale:settings.refraction,xChannelSelector:'R',yChannelSelector:'G'});
      filter.append(map,displacement);defs.append(filter);
      const body=document.createElement('span');body.className='liquid-body';body.setAttribute('aria-hidden','true');
      body.style.setProperty('--liquid-filter',`url(#${id}) blur(${settings.blur}px) saturate(${settings.saturation})`);host.prepend(body);
      const record={host,body,filter,baseId:id,opticalVersion:0,opticalFilters:new Map([[settings.refraction,filter]]),x:spring(),y:spring(),p:spring(),lx:spring(),ly:spring(),lightX:0,lightY:0,reveal:spring(),expanded:0,large:host===dialog||host===menu.querySelector('div'),tx:0,ty:0,tp:0,radius:32};
      records.set(host,record);measure(record);host.classList.add('liquid-ready');observer.observe(host);
    }
    strip.querySelectorAll('button').forEach(button=>observer.observe(button));updateSelection();requestAdaptation();
  }
  function point(event,pressed=false){
    if(!canMove()||(!pressed&&event.pointerType!=='mouse'))return;
    const previous=input;input=samplePointer(input,event.clientX,event.clientY,performance.now());
    const speed=pointerEnergy(input,input.time);
    const host=event.target.closest('.liquid-surface'),next=records.get(host);
    if(current&&current!==next){current.tx=current.ty=current.tp=0;moving.add(current);}current=next||null;
    if(current){
      const rect=surfaceRect(current),x=event.clientX-rect.left,y=event.clientY-rect.top;
      current.tx=(x/rect.width-.5)*settings.flex*2;current.ty=(y/rect.height-.5)*settings.flex*2;current.tp=pressed||event.buttons?1:.32;
      if(pressed)current.p.velocity+=5;
      current.lightX=x;current.lightY=y;moving.add(current);
    }
    // A fast pass still excites narrow glass islands when no event lands on them.
    if(speed>.08){
      for(const record of records.values()){
        if(record===current)continue;
        const r=surfaceRect(record);
        if(!r.width||!r.height||r.bottom<0||r.top>innerHeight||!sweptSurface(previous,input,r))continue;
        // Excite once on entering the material's vicinity. Repeated high-rate
        // events inside that same halo must not keep kicking the spring.
        if(previous&&previous.x>=r.left-18&&previous.x<=r.right+18&&previous.y>=r.top-18&&previous.y<=r.bottom+18)continue;
        record.p.velocity=Math.min(9,record.p.velocity+speed*4);
        record.x.velocity=Math.max(-22,Math.min(22,record.x.velocity+input.vx*.003));record.y.velocity=Math.max(-22,Math.min(22,record.y.velocity+input.vy*.003));
        record.lightX=Math.max(0,Math.min(r.width,input.x-r.left));record.lightY=Math.max(0,Math.min(r.height,input.y-r.top));moving.add(record);
      }
    }
    scene.tx=(event.clientX/innerWidth-.5)*16;scene.ty=(event.clientY/innerHeight-.5)*12;schedule();
  }
  document.addEventListener('pointermove',event=>point(event),{passive:true});document.addEventListener('pointerdown',event=>point(event,true),{passive:true});
  document.addEventListener('pointerup',release,{passive:true});document.documentElement.addEventListener('pointerleave',release);
  document.addEventListener('pointercancel',reset);document.addEventListener('keydown',reset);document.addEventListener('visibilitychange',reset);
  window.addEventListener('blur',reset);window.addEventListener('resize',()=>{geometryRevision++;reset();requestAdaptation();});
  document.addEventListener('scroll',()=>{geometryRevision++;requestAdaptation();const delta=scrollY-lastScroll;lastScroll=scrollY;if(canMove()){
    release();scene.y.velocity=Math.max(-30,Math.min(30,scene.y.velocity+delta*.4));
    const record=records.get(nav);if(record&&delta){record.p.velocity=Math.min(8,record.p.velocity+Math.abs(delta)*.035);record.y.velocity=Math.max(-18,Math.min(18,record.y.velocity+delta*.08));moving.add(record);}
    schedule();
  }},{passive:true,capture:true});
  document.querySelector('dialog').addEventListener('close',reset);document.querySelector('dialog').addEventListener('toggle',()=>{for(const record of records.values())measure(record);});
  menu.addEventListener('toggle',()=>{for(const record of records.values())measure(record);requestAdaptation();});
  for(const q of [reduced,transparency,contrast,forced])q.addEventListener('change',syncPreferences);
  // Queue after the shared toggle has persisted its new preference.
  document.querySelector('#pointer-toggle').addEventListener('click',()=>queueMicrotask(()=>{try{optedOut=localStorage.getItem('design-pointer-effects')==='off';}catch{optedOut=!optedOut;}syncPreferences();}));
  window.addEventListener('storage',event=>{if(event.key==='design-pointer-effects'){optedOut=event.newValue==='off';syncPreferences();}});
  return {setTheme,updateSelection,
    toggleMenu:()=>{if(!active)return false;transitions.toggleMenu();return true;},
    setMenuOpen:open=>{if(!active)return false;transitions.setMenuOpen(open);return true;},
    showDialog:button=>{if(!active)return false;transitions.showDialog(button);return true;},
    closeDialog:()=>{if(!active)return false;transitions.closeDialog();return true;}
  };
}
