// Local optical/interaction regression check. Reuses desktop-pointer Chrome on 9223.
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
const origin='http://127.0.0.1:4173',out='/tmp/design-style-mds-liquid-layout/';
await mkdir(out,{recursive:true});
const {webSocketDebuggerUrl}=await(await fetch('http://127.0.0.1:9223/json/new?about:blank',{method:'PUT'})).json();
const socket=new WebSocket(webSocketDebuggerUrl);await new Promise(r=>socket.addEventListener('open',r,{once:true}));
let id=0;const pending=new Map(),errors=[];
socket.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result);}if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails);});
const send=(method,params={})=>new Promise((resolve,reject)=>{const key=++id;pending.set(key,{resolve,reject});socket.send(JSON.stringify({id:key,method,params}));});
const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});assert(!r.exceptionDetails,JSON.stringify(r.exceptionDetails));return r.result.value;};
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function navigate(path){await send('Page.navigate',{url:origin+path});for(let i=0;i<100;i++){if(await evaluate(`location.href===${JSON.stringify(origin+path)}&&document.readyState==='complete'&&document.querySelector('#showcase')?.contentDocument?.querySelector('.liquid-body')`))break;await wait(30);}await evaluate('document.fonts.ready');await wait(1000);}
async function move(x,y){await send('Input.dispatchMouseEvent',{type:'mouseMoved',x,y});await wait(100);}
async function locate(selector){await evaluate(`document.querySelector(${JSON.stringify(selector)}).scrollIntoView({block:'center'})`);await wait(1000);return evaluate(`(()=>{const r=document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();return{x:r.x+r.width*.6,y:r.y+r.height*.4,width:r.width,height:r.height}})()`);}
async function screenshot(name,clip){const r=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:!!clip,...(clip?{clip:{...clip,scale:1}}:{})});await writeFile(out+name+'.png',Buffer.from(r.data,'base64'));return r.data;}

const frameState=()=>evaluate(`(()=>{
 const f=document.querySelector('#showcase'),d=f.contentDocument,w=f.contentWindow;
 const box=e=>{const r=e.getBoundingClientRect();return{left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:r.width,height:r.height}};
 const targets=['.demo-nav','.demo-name','.hero-copy','.project-card','.workspace-controls','.control-tools','.demo-tabs'];
 const tabs=box(d.querySelector('.demo-tabs')),panel=box(d.querySelector('#features>[role=tabpanel]:not([hidden])'));
 return{theme:d.documentElement.dataset.theme,viewport:d.documentElement.clientWidth,scrollWidth:d.documentElement.scrollWidth,scrollX:w.scrollX,
  frame:box(f),wrap:box(f.parentElement),tabs,panel,targets:targets.map(s=>({selector:s,...box(d.querySelector(s))})),
  sticky:getComputedStyle(d.querySelector('.demo-nav')).position,
  sceneMasks:['.hero','.workspace-controls'].map(s=>w.getComputedStyle(d.querySelector(s),'::before').maskImage)};
})()`);
try{
 await send('Runtime.enable');await send('Page.enable');
 const report=[];
 for(const width of (process.argv[2]||'1440,1100,1000,900,801,800,657,390,320').split(',').map(Number)){
  await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});
  await navigate('/styles/liquid-glass/frosted-controls');
  for(const slug of ['frosted-controls','fluid-dock','clear-lens']){
   await evaluate(`document.querySelector('[data-variant="${slug}"]').click()`);await wait(180);
   for(const size of ['full','mobile']){
    await evaluate(`document.querySelector('[data-size="${size}"]').click()`);await wait(180);
    for(const selected of ['overview','activity']){
     await evaluate(`(()=>{const f=document.querySelector('#showcase'),d=f.contentDocument;d.querySelector('#${selected}-tab').click();f.contentWindow.scrollTo(0,0)})()`);await wait(200);
     const s=await frameState(),label=`${slug} at outer ${width}px, ${size}, ${selected}`;
     assert(s.scrollWidth<=s.viewport,label+' document must fit iframe '+JSON.stringify(s));assert.equal(s.scrollX,0,label+' must not scroll horizontally');
     assert(s.frame.left>=s.wrap.left&&s.frame.right<=s.wrap.right,label+' entire iframe must fit its wrapper');
     for(const t of s.targets)assert(t.left>=-.5&&t.right<=s.viewport+.5,label+' clipped '+t.selector+' '+JSON.stringify(t));
     assert(s.panel.top-s.tabs.bottom>=24,label+' tabs must reserve a gap before panel');
     assert(s.sceneMasks.every(mask=>mask!=='none'),label+' decorative scene must fade before its bounds');
     assert.equal(s.sticky,'sticky',label+' primary header remains sticky');
     // Scroll the actual embedded preview, rather than a standalone page.
     await evaluate(`(()=>{const f=document.querySelector('#showcase'),d=f.contentDocument,w=f.contentWindow;w.scrollTo(0,d.querySelector('#${selected}').getBoundingClientRect().top+w.scrollY-220)})()`);await wait(180);
     const scrolled=await frameState();assert(scrolled.panel.top-scrolled.tabs.bottom>=24,label+' scrolling must not move tabs onto panel content');
     if(width===1100&&size==='full'&&slug==='frosted-controls'){
      await evaluate("document.querySelector('#showcase').scrollIntoView({block:'start'})");await screenshot(slug+'-'+selected);
     }
     report.push({width,slug,size,selected,innerWidth:s.viewport,gap:s.panel.top-s.tabs.bottom});
    }
    if(width===1100&&size==='full'&&slug==='fluid-dock'){
     await evaluate("(()=>{const d=document.querySelector('#showcase').contentDocument;d.querySelector('.project-card').scrollIntoView({block:'center'});document.querySelector('#showcase').scrollIntoView({block:'start'})})()");await wait(300);await screenshot('fluid-dock-workspace');
    }
   }
  }
 }
 assert.deepEqual(errors,[]);await writeFile(out+'report.json',JSON.stringify(report,null,2));
 console.log(`Passed ${report.length} embedded layouts: tab separation, scene boundaries, fit width, mobile width, and sticky navigation. ${out}`);
}finally{await send('Page.close');socket.close();}
