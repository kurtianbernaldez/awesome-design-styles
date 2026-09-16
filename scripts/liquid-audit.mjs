// Local optical/interaction regression check. Reuses desktop-pointer Chrome on 9223.
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
const origin='http://127.0.0.1:4173',out='/tmp/design-style-mds-liquid/';
await mkdir(out,{recursive:true});
const {webSocketDebuggerUrl}=await(await fetch('http://127.0.0.1:9223/json/new?about:blank',{method:'PUT'})).json();
const socket=new WebSocket(webSocketDebuggerUrl);await new Promise(r=>socket.addEventListener('open',r,{once:true}));
let id=0;const pending=new Map(),errors=[];
socket.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result);}if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails);});
const send=(method,params={})=>new Promise((resolve,reject)=>{const key=++id;pending.set(key,{resolve,reject});socket.send(JSON.stringify({id:key,method,params}));});
const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});assert(!r.exceptionDetails,JSON.stringify(r.exceptionDetails));return r.result.value;};
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function navigate(path){await send('Page.navigate',{url:origin+path});for(let i=0;i<100;i++){if(await evaluate(`location.href===${JSON.stringify(origin+path)}&&document.readyState==='complete'&&document.querySelector('.liquid-body')`))break;await wait(30);}await evaluate('document.fonts.ready');await wait(1000);}
async function move(x,y){await send('Input.dispatchMouseEvent',{type:'mouseMoved',x,y});await wait(100);}
async function locate(selector){await evaluate(`document.querySelector(${JSON.stringify(selector)}).scrollIntoView({block:'center'})`);await wait(1000);return evaluate(`(()=>{const r=document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();return{x:r.x+r.width*.6,y:r.y+r.height*.4,width:r.width,height:r.height}})()`);}
async function screenshot(name,clip){const r=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:!!clip,...(clip?{clip:{...clip,scale:1}}:{})});await writeFile(out+name+'.png',Buffer.from(r.data,'base64'));return r.data;}
const state=()=>evaluate(`(()=>{const h=document.querySelector('.workspace-controls'),b=h.querySelector('.liquid-body');return{transform:b.style.transform,filter:getComputedStyle(b).backdropFilter,hostFilter:getComputedStyle(h).backdropFilter,scale:[...document.querySelectorAll('.liquid-body')].map(e=>{const id=e.style.getPropertyValue('--liquid-filter').match(/#([^)]*)/)[1];return +document.getElementById(id).querySelector('feDisplacementMap').getAttribute('scale')}),graphCount:document.querySelectorAll('.liquid-optics filter').length,bodyCount:document.querySelectorAll('.liquid-body').length,scene:document.documentElement.style.getPropertyValue('--liquid-scene-x'),running:document.documentElement.hasAttribute('data-liquid-animating'),rect:JSON.stringify(h.getBoundingClientRect()),labels:JSON.stringify([...h.querySelectorAll('button,label,output')].map(e=>e.getBoundingClientRect().toJSON()))}})()`);
try{
 await send('Runtime.enable');await send('Page.enable');await send('Page.bringToFront');
 await send('Emulation.setDeviceMetricsOverride',{width:1100,height:950,deviceScaleFactor:1,mobile:false});
 const report=[];
 for(const slug of ['clear-lens','frosted-controls','fluid-dock']){
  await navigate('/preview.html?theme=liquid-glass/'+slug);
  await evaluate("localStorage.removeItem('design-pointer-effects')");await navigate('/preview.html?theme=liquid-glass/'+slug);
  assert.equal(await evaluate("getComputedStyle(document.querySelector('.demo-nav')).position"),'sticky',slug+' navigation must be sticky');
  assert.notEqual(await evaluate("getComputedStyle(document.querySelector('.demo-nav>.liquid-body'),'::before').backgroundImage"),'none','pointer highlight must have valid CSS');
  await screenshot(slug+'-top');
  // Check the finished navigation over the actual scene, retaining its fill,
  // blur and highlights. The old stripes-only probe hid material regressions.
  const navClip=await evaluate("(()=>{const r=document.querySelector('.demo-nav').getBoundingClientRect();return{x:r.x,y:r.y+scrollY,width:r.width,height:r.height}})()");
  const navBent=await screenshot(slug+'-nav-refraction',navClip);
  await evaluate(`(()=>{const b=document.querySelector('.demo-nav>.liquid-body'),value=b.style.getPropertyValue('--liquid-filter'),id=value.match(/#([^)]*)/)[1],flat=document.getElementById(id).cloneNode(true);flat.id='nav-flat-probe';flat.querySelector('feDisplacementMap').setAttribute('scale','0');document.querySelector('.liquid-optics defs').append(flat);b.style.backdropFilter=value.replace(id,flat.id)})()`);await wait(100);
  const navFlat=await screenshot(slug+'-nav-flat',navClip);
  const navChangedPixels=await evaluate(`(async()=>{const read=async(data)=>{const img=new Image();img.src='data:image/png;base64,'+data;await img.decode();const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const ctx=c.getContext('2d');ctx.drawImage(img,0,0);return ctx.getImageData(0,0,c.width,c.height).data;};const a=await read(${JSON.stringify(navBent)}),b=await read(${JSON.stringify(navFlat)});let changed=0;for(let i=0;i<a.length;i+=4)if(Math.max(Math.abs(a[i]-b[i]),Math.abs(a[i+1]-b[i+1]),Math.abs(a[i+2]-b[i+2]))>9)changed++;return changed;})()`);
  assert(navChangedPixels>100,slug+' finished navigation must visibly refract its real backdrop');
  await evaluate("document.querySelector('.demo-nav>.liquid-body').style.removeProperty('backdrop-filter');document.querySelector('#nav-flat-probe').remove()");
  for(const y of [300,600]){
    await evaluate(`scrollTo(0,${y})`);await wait(300);
    assert(Math.abs(await evaluate("document.querySelector('.demo-nav').getBoundingClientRect().top")-12)<1,slug+' header must stay pinned after scrolling');
  }
  if(slug==='clear-lens')assert.equal(await evaluate("document.querySelector('.liquid-scroll-edge').hidden"),true,'clear navigation must see the content beneath it');
  await screenshot(slug+'-sticky');await evaluate('scrollTo(0,0)');await wait(1000);
  const r=await locate('.workspace-controls');const rest=await state();
  assert(rest.graphCount<=rest.bodyCount*13,'optical graphs must have a bounded per-surface cache');
  await evaluate("window.liquidAuditGraphs=[...document.querySelectorAll('.liquid-optics filter')]");
  assert.equal(rest.hostFilter,'none');assert(rest.filter.includes('url('),'actual body must use a local optical filter');
  const maps=await evaluate("[...document.querySelectorAll('feImage')].filter(e=>e.getAttribute('href')?.startsWith('data:image/png')).length");assert(maps>=4);
  await move(r.x,r.y);const hover=await state();assert.notEqual(hover.transform,rest.transform);assert(hover.scale.some((v,i)=>v!==rest.scale[i]));assert.notEqual(hover.scene,'0.000px');assert.equal(hover.rect,rest.rect);assert.equal(hover.labels,rest.labels);
  await screenshot(slug+'-hover');
  await send('Input.dispatchMouseEvent',{type:'mousePressed',button:'left',clickCount:1,x:r.x,y:r.y});await wait(80);
  const press=await state();assert.notEqual(press.transform,hover.transform);assert(parseFloat(press.filter.match(/blur\(([^p]+)/)[1])<parseFloat(hover.filter.match(/blur\(([^p]+)/)[1]),'contact clears the material');assert(press.scale.some((v,i)=>v>hover.scale[i]));await screenshot(slug+'-press');
  assert(await evaluate("[...document.querySelectorAll('.liquid-optics filter')].every(e=>window.liquidAuditGraphs.includes(e))"),'motion must reuse immutable optical graphs rather than allocate new graphs per frame');
  await send('Input.dispatchMouseEvent',{type:'mouseReleased',button:'left',clickCount:1,x:r.x,y:r.y});
  await evaluate("document.documentElement.dispatchEvent(new PointerEvent('pointerleave'))");await wait(1800);const settled=await state();assert.equal(settled.running,false,'no idle animation loop');
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});await move(r.x+30,r.y+20);assert.equal((await state()).transform,'none');assert.equal((await state()).running,false);
  // A stationary checker reveals whether underlying pixels really bend through the lens.
  await evaluate(`(()=>{const h=document.querySelector('.workspace-controls');const e=document.createElement('span');e.id='optical-probe';e.style.cssText='position:absolute;inset:-25px;z-index:-2;background:repeating-linear-gradient(90deg,#fff 0 10px,#17384a 10px 20px);pointer-events:none';h.prepend(e);h.querySelector('.liquid-body').style.background='transparent';h.querySelector('.liquid-body').style.backdropFilter=h.querySelector('.liquid-body').style.getPropertyValue('--liquid-filter').replace(/blur\\([^)]*\\)/,'blur(0px)')})()`);await wait(100);
  const clip=await evaluate("(()=>{const r=document.querySelector('.workspace-controls').getBoundingClientRect();return{x:Math.max(0,r.x+scrollX-12),y:Math.max(0,r.y+scrollY-12),width:r.width+24,height:r.height+24}})()");
  const bent=await screenshot(slug+'-refraction',clip);
  await evaluate(`(()=>{const b=document.querySelector('.workspace-controls>.liquid-body');const id=b.style.getPropertyValue('--liquid-filter').match(/#([^)]*)/)[1];const copy=document.getElementById(id).cloneNode(true);copy.id='flat-probe';copy.querySelector('feDisplacementMap').setAttribute('scale','0');document.querySelector('.liquid-optics defs').append(copy);b.style.backdropFilter='url(#flat-probe) blur(0px)'})()`);await wait(100);const flat=await screenshot(slug+'-flat',clip);assert(bent!==flat,'backdrop pixels must change with displacement');
  await send('Emulation.setEmulatedMedia',{features:[]});await navigate('/preview.html?theme=liquid-glass/'+slug);
  // Off preference stops all material and background motion, including the tab marker.
  await evaluate("document.querySelector('#pointer-toggle').click()");await wait(20);assert.equal(await evaluate('document.documentElement.dataset.liquidMotion'),'off');
  const q=await locate('.workspace-controls');await move(q.x,q.y);assert.equal((await state()).transform,'none');assert.equal((await state()).running,false);
  await evaluate("document.querySelector('#pointer-toggle').click()");await wait(20);
  for(const width of [390,320]){
    await send('Emulation.setDeviceMetricsOverride',{width,height:850,deviceScaleFactor:1,mobile:false});await wait(250);
    assert(await evaluate('document.documentElement.scrollWidth<=innerWidth'),slug+' must not overflow on phone');
    await evaluate('scrollTo(0,500)');await wait(200);
    assert(Math.abs(await evaluate("document.querySelector('.demo-nav').getBoundingClientRect().top")-8)<1,slug+' header must stay pinned on phone');
  }
  await send('Emulation.setDeviceMetricsOverride',{width:1100,height:950,deviceScaleFactor:1,mobile:false});
  await navigate('/preview.html?theme=liquid-glass/'+slug);await move(400,250);
  assert.equal(await evaluate("document.querySelectorAll('.water-drop,.pointer-field').length"),0,'Liquid Glass must leave the cursor normal');
  if(slug!=='clear-lens'){
    const initial=await evaluate("document.querySelector('.demo-nav').dataset.materialTone");
    const target=slug==='fluid-dock'?'#features':'#about';
    await evaluate(`scrollTo(0,document.querySelector('${target}').getBoundingClientRect().top+scrollY+40)`);await wait(600);
    const changed=await evaluate("document.querySelector('.demo-nav').dataset.materialTone");
    assert.notEqual(changed,initial,slug+' navigation must adapt to the contrasting content plane');
    assert.equal(await evaluate("document.querySelector('.liquid-scroll-edge').hidden"),false,'scroll edge appears under pinned navigation');
    assert(await evaluate("getComputedStyle(document.querySelector('.demo-nav .demo-name')).color===getComputedStyle(document.querySelector('.demo-nav')).color"),'foreground follows material tone');
    await screenshot(slug+'-adaptive');
    await evaluate("document.querySelector('.demo-menu summary').click()");await wait(70);
    assert(await evaluate("document.querySelector('.demo-menu>div>.liquid-body').getAnimations().length>0"),'menu grows from its trigger');
    await screenshot(slug+'-menu-growing');await wait(600);
    assert(await evaluate("parseFloat(getComputedStyle(document.querySelector('.demo-menu>div>.liquid-body')).backdropFilter.match(/blur\\(([^p]+)/)[1])>parseFloat(getComputedStyle(document.querySelector('.demo-nav>.liquid-body')).backdropFilter.match(/blur\\(([^p]+)/)[1])"),'expanded menu has thicker scattering');
    await screenshot(slug+'-menu');
    await evaluate("document.querySelector('.demo-menu summary').click()");await wait(40);await evaluate("document.querySelector('.demo-menu summary').click()");await wait(500);
    assert(await evaluate("document.querySelector('.demo-menu').open"),'closing menu can reopen without a stale close callback');
    await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await wait(350);
    assert.equal(await evaluate("document.querySelector('.demo-menu').open"),false);
    await evaluate("document.querySelector('.demo-nav [data-open]').click()");await wait(80);
    assert(await evaluate("document.querySelector('dialog').open&&document.querySelector('dialog>.liquid-body').getAnimations().length>0"),'dialog has a material reveal');
    await wait(700);const tone=await evaluate("document.querySelector('dialog').dataset.materialTone");await evaluate('scrollBy(0,100)');await wait(200);
    assert.equal(await evaluate("document.querySelector('dialog').dataset.materialTone"),tone,'large surface keeps its opening tone');await screenshot(slug+'-dialog');
    await evaluate("document.querySelector('#cancel-dialog').click()");await wait(350);assert.equal(await evaluate("document.querySelector('dialog').open"),false);
    assert(await evaluate("document.activeElement.matches('.demo-nav [data-open]')"),'dialog restores focus');
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});await evaluate("document.querySelector('.demo-menu summary').click()");await wait(30);
    assert.equal(await evaluate("document.querySelector('.demo-menu>div>.liquid-body').getAnimations().length"),0,'reduced motion removes morphing');await evaluate("document.querySelector('.demo-menu summary').click()");
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-transparency',value:'reduce'}]});await wait(100);
    assert.equal(await evaluate("getComputedStyle(document.querySelector('.demo-nav>.liquid-body')).backdropFilter"),'none');
    await send('Emulation.setEmulatedMedia',{features:[]});
  }else{
    assert.equal(await evaluate("document.documentElement.dataset.liquidKind"),'clear');assert.equal(await evaluate("document.querySelector('dialog>.liquid-body')"),null,'clear does not mix regular glass into reading dialogs');
  }
  report.push({slug,maps,navChangedPixels,motion:true,stickyDesktopAndMobile:true,actualBackdropDisplacement:true,stableLabels:true,reducedMotion:true,optOut:true,mobile:true});
 }
 assert.deepEqual(errors,[]);await writeFile(out+'report.json',JSON.stringify(report,null,2));console.log('Passed: three variants, real backdrop displacement, press/settle, stationary targets, preferences, mobile. '+out);
}finally{await send('Page.close');socket.close();}
