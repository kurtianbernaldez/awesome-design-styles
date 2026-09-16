const mix=(a,b,t)=>a.map((v,i)=>v*(1-t)+b[i]*t);
export const luminance=rgb=>rgb.reduce((sum,v,i)=>{const c=v/255;return sum+[.2126,.7152,.0722][i]*(c<=.04045?c/12.92:((c+.055)/1.055)**2.4);},0);
export const contrastRatio=(a,b)=>{const x=luminance(a),y=luminance(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
export const rgbCss=(rgb,alpha=1)=>`rgb(${rgb.map(Math.round).join(' ')} / ${alpha.toFixed(3)})`;

// Bounded web adaptation: actual DOM surface colors and text density, not a
// claim to read arbitrary image/video pixels from the browser compositor.
export function materialForBackdrop(samples,{kind='regular',large=false,tone,accent}={}) {
  const colors=samples.length?samples.map(s=>s.color):[[230,239,244]];
  const ambient=colors.reduce((sum,c)=>sum.map((v,i)=>v+c[i]/colors.length),[0,0,0]);
  const brightness=luminance(ambient),busy=samples.filter(s=>s.busy).length/Math.max(1,samples.length);
  // Clear glass adds a neutral reflection, not a colored pane. Its opaque
  // accessibility fallback remains dark enough for the same bright labels.
  if(kind==='clear')return{tone:'dark',fill:[255,255,255],solid:[18,35,42],alpha:.035,contactAlpha:.012,ink:[250,254,255],ambient,shadow:.14+busy*.1,busy};
  // Hysteresis prevents repeated light/dark flips near a boundary. Large menus
  // retain their opening tone while ambient tint and separation may change.
  const next=large&&tone?tone:tone==='light'?(brightness<.28?'dark':'light'):tone==='dark'?(brightness>.48?'light':'dark'):(brightness>.38?'light':'dark');
  let fill=mix(next==='light'?[248,248,248]:[22,22,22],ambient,large?.06:.015);
  let alpha=large?.92:(next==='light'?.16:.12)+busy*.35;
  let ink=next==='light'?[17,31,42]:[250,254,255];
  if(accent){
    fill=mix(accent,ambient,.12);alpha=.94;
    const dark=[0,0,0],light=[255,255,255],worst=c=>Math.min(...colors.map(bg=>contrastRatio(c,mix(bg,fill,alpha))));
    ink=worst(dark)>=worst(light)?dark:light;
  }
  // Raise material opacity if necessary; never sacrifice labels for translucency.
  while(alpha<1&&colors.some(bg=>contrastRatio(ink,mix(bg,fill,alpha))<4.55)){
    alpha=Math.min(1,alpha+.02);
    if(accent){const worst=c=>Math.min(...colors.map(bg=>contrastRatio(c,mix(bg,fill,alpha))));ink=worst([0,0,0])>=worst([255,255,255])?[0,0,0]:[255,255,255];}
  }
  let contactAlpha=large||accent?alpha:Math.max(.08,alpha-.14);
  while(contactAlpha<alpha&&colors.some(bg=>contrastRatio(ink,mix(bg,fill,contactAlpha))<4.55))contactAlpha=Math.min(alpha,contactAlpha+.02);
  return{tone:next,fill,alpha,contactAlpha,ink,ambient,shadow:.12+busy*.18+(large?.1:0),busy};
}

function parseColor(value){
  if(/^#[\da-f]{6}$/i.test(value))return{rgb:[1,3,5].map(i=>parseInt(value.slice(i,i+2),16)),alpha:1};
  const match=value.match(/^rgba?\(([^)]+)\)/);if(!match)return null;
  const values=match[1].match(/[\d.]+/g)?.map(Number);return values?.length>=3?{rgb:values.slice(0,3),alpha:values[3]??1}:null;
}
export function readColor(element,property='backgroundColor') {return parseColor(getComputedStyle(element)[property]);}
export function readToken(element,property){return parseColor(getComputedStyle(element).getPropertyValue(property).trim());}

export function sampleBackdrop(host,fallback=[230,239,244]) {
  const rect=host.getBoundingClientRect(),samples=[];
  for(const px of [.12,.5,.88])for(const py of [.2,.55,.85]){
    const x=Math.max(1,Math.min(innerWidth-2,rect.left+rect.width*px)),y=Math.max(1,Math.min(innerHeight-2,rect.top+rect.height*py));
    const stack=document.elementsFromPoint(x,y).filter(el=>!host.contains(el)&&!el.closest('.liquid-surface,.liquid-scroll-edge,.pointer-effect'));
    let color=[...fallback],busy=false,unknown=false;
    for(const el of stack.reverse()){
      const style=getComputedStyle(el),paint=parseColor(style.backgroundColor);
      if(paint&&paint.alpha>0)color=mix(color,paint.rgb,paint.alpha);
      // Authored representative color for this showcase's gradient environments.
      const scene=style.getPropertyValue('--glass-scene-color').trim();
      if(style.backgroundImage!=='none'&&scene){const parsed=parseColor(scene);if(parsed)color=parsed.rgb;}
      if(el.matches('img,video,canvas'))unknown=true;
      if(el.matches('p,h1,h2,h3,li,label,blockquote')&&el.textContent.trim())busy=true;
    }
    samples.push({color,busy:busy||unknown});
  }
  return samples;
}
