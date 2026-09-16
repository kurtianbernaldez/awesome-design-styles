// Convex rounded-lens displacement. Build on resize, never on every animation frame.
export function createLensMap(width,height,radius,maxRefraction=80) {
  const scale=Math.min(1,1024/Math.max(width,1),512/Math.max(height,1));
  const w=Math.max(2,Math.round(width*scale)),h=Math.max(2,Math.round(height*scale));
  const r=Math.max(1,Math.min(radius*scale,w/2,h/2));
  const bevel=Math.max(1,Math.min(r*1.6,h*.46,72*scale));
  // Keep the steepest shoulder below a pixel-for-pixel reversal, including at
  // peak pressure. Short navigation pills need less displacement than panels.
  const amplitude=Math.min(112,bevel/scale*.52*255/Math.max(1,maxRefraction));
  const data=new Uint8ClampedArray(w*h*4);
  for(let y=0;y<h;y++)for(let x=0;x<w;x++) {
    const px=x+.5-w/2,py=y+.5-h/2;
    const qx=Math.abs(px)-(w/2-r),qy=Math.abs(py)-(h/2-r);
    const ax=Math.max(qx,0),ay=Math.max(qy,0),length=Math.hypot(ax,ay);
    const distance=length+Math.min(Math.max(qx,qy),0)-r;
    let nx=0,ny=0,bend=0;
    if(distance<=0&&distance>-bevel) {
      if(length>0){nx=ax/length*Math.sign(px);ny=ay/length*Math.sign(py);}
      else if(qx>qy)nx=Math.sign(px);else ny=Math.sign(py);
      // A broad convex shoulder concentrates the backdrop through the body,
      // rather than leaving almost all refraction on a thin outlined rim.
      bend=Math.sin((1+distance/bevel)*Math.PI/2)**1.2;
    }
    const i=(y*w+x)*4;
    data[i]=128-nx*bend*amplitude;data[i+1]=128-ny*bend*amplitude;
    data[i+2]=128;data[i+3]=255;
  }
  return {width:w,height:h,data};
}

export function advanceSpring(state,target,dt) {
  dt=Math.max(0,Math.min(dt,1/30));
  state.velocity+=((target-state.value)*210-state.velocity*16)*dt;
  state.value+=state.velocity*dt;
  if(Math.abs(state.value-target)<.001&&Math.abs(state.velocity)<.02){state.value=target;state.velocity=0;}
  return state;
}
