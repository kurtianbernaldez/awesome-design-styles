// Input velocity is measured in CSS pixels/second, independent of event frequency.
export function samplePointer(previous,x,y,time) {
  const elapsed=previous?time-previous.time:0;
  if(!previous||elapsed<=0||elapsed>180)return{x,y,time,vx:0,vy:0,speed:0};
  const dt=Math.max(4,elapsed),blend=1-Math.exp(-dt/28);
  let vx=previous.vx+((x-previous.x)*1000/dt-previous.vx)*blend;
  let vy=previous.vy+((y-previous.y)*1000/dt-previous.vy)*blend;
  const magnitude=Math.hypot(vx,vy),limit=Math.min(1,2400/(magnitude||1));
  vx*=limit;vy*=limit;
  return{x,y,time,vx,vy,speed:Math.hypot(vx,vy)};
}

export function pointerEnergy(sample,time) {
  if(!sample)return 0;
  const value=Math.min(1,sample.speed/1800)*Math.exp(-Math.max(0,time-sample.time-32)/85);
  return value<.001?0:value;
}

// Fast/coalesced events can skip a narrow control. Test the swept pointer segment.
export function sweptSurface(previous,point,rect,padding=18) {
  if(!previous||point.time-previous.time>180)return false;
  let low=0,high=1;
  for(const [start,delta,min,max]of [[previous.x,point.x-previous.x,rect.left-padding,rect.right+padding],[previous.y,point.y-previous.y,rect.top-padding,rect.bottom+padding]]){
    if(!delta){if(start<min||start>max)return false;continue;}
    const a=(min-start)/delta,b=(max-start)/delta;
    low=Math.max(low,Math.min(a,b));high=Math.min(high,Math.max(a,b));
    if(low>high)return false;
  }
  return true;
}
