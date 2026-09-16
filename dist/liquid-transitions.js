// Preserve native details/dialog semantics; animate only their material and reveal.
export function createLiquidTransitions({menu,dialog,recordFor,canMove,onExpand,onContext}) {
  const active=new Map();let opener,desiredMenuOpen=menu.open;
  function stop(panel,finish=false){const job=active.get(panel);if(!job)return;active.delete(panel);job.animations.forEach(a=>a.cancel());panel.style.removeProperty('pointer-events');if(finish)job.done?.();}
  function animate(panel,source,opening,done){
    stop(panel);const record=recordFor(panel);onExpand(panel,opening);
    if(!record||!canMove()){done?.();return;}
    const to=panel.getBoundingClientRect(),from=source?.getBoundingClientRect()||to;
    const dx=from.left-to.left,dy=from.top-to.top,sx=Math.max(.08,from.width/to.width),sy=Math.max(.08,from.height/to.height);
    const small={transform:`translate(${dx}px,${dy}px) scale(${sx},${sy})`,borderRadius:'28px',transformOrigin:'0 0'};
    const full={transform:'translate(0,0) scale(1)',borderRadius:record.radius+'px',transformOrigin:'0 0'};
    const duration=opening?300:210;
    const animations=[record.body.animate(opening?[small,full]:[full,small],{duration,easing:'cubic-bezier(.2,.8,.2,1)'})];
    for(const child of panel.children){if(child===record.body)continue;animations.push(child.animate(opening?[{opacity:0},{opacity:1}]:[{opacity:1},{opacity:0}],{duration:opening?180:100,delay:opening?70:0,fill:'both'}));}
    if(!opening)panel.style.pointerEvents='none';
    const job={animations,done};active.set(panel,job);
    animations[0].finished.then(()=>{if(active.get(panel)===job){active.delete(panel);animations.forEach(a=>a.cancel());panel.style.removeProperty('pointer-events');done?.();}},()=>{});
  }
  function setMenuOpen(open){
    desiredMenuOpen=open;
    const panel=menu.querySelector('div'),summary=menu.querySelector('summary');
    if(open){if(menu.open&&!active.has(panel))return;stop(panel);menu.open=true;onContext(panel,summary);animate(panel,summary,true);}
    else if(menu.open){animate(panel,summary,false,()=>{menu.open=false;});}
  }
  function showDialog(button){
    opener=button;onContext(dialog,button);dialog.showModal();animate(dialog,button,true);
  }
  function closeDialog(){if(dialog.open)animate(dialog,opener,false,()=>dialog.close());}
  return{setMenuOpen,toggleMenu:()=>setMenuOpen(active.has(menu.querySelector('div'))?!desiredMenuOpen:!menu.open),showDialog,closeDialog,finish:()=>{for(const panel of [...active.keys()])stop(panel,true);}};
}
