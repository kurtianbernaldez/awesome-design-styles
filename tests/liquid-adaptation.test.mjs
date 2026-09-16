import test from 'node:test';
import assert from 'node:assert/strict';
import {materialForBackdrop,contrastRatio} from '../dist/liquid-adaptation.js';
const sample=(color,busy=false)=>({color,busy});
test('regular material adapts to actual bright and dark surfaces with hysteresis',()=>{
  const light=materialForBackdrop([sample([240,245,250])]);
  const dark=materialForBackdrop([sample([20,30,50])],{tone:light.tone});
  assert.equal(light.tone,'light');assert.equal(dark.tone,'dark');assert.notDeepEqual(light.fill,dark.fill);assert.notDeepEqual(light.ink,dark.ink);
  assert.equal(materialForBackdrop([sample([168,168,168])],{tone:'dark'}).tone,'dark');
  assert.equal(materialForBackdrop([sample([168,168,168])],{tone:'light'}).tone,'light');
});
test('text-rich backdrops and expanded surfaces gain separation',()=>{
  const calm=materialForBackdrop([sample([190,210,230])]);
  const busy=materialForBackdrop([sample([190,210,230],true)]);
  const menu=materialForBackdrop([sample([240,245,250],true)],{large:true,tone:'dark'});
  assert(busy.shadow>calm.shadow);assert(busy.alpha>=calm.alpha);assert.equal(menu.tone,'dark');assert(menu.alpha>=.92);
});
test('regular foreground and selective tint meet contrast across sampled backdrops',()=>{
  const colors=[[0,0,0],[255,255,255],[45,70,85],[180,90,160]];
  for(const accent of [undefined,[159,221,203],[137,105,210],[48,108,133]]){
    const material=materialForBackdrop(colors.map(c=>sample(c,true)),{accent});
    for(const alpha of [material.alpha,material.contactAlpha])for(const background of colors){const composite=background.map((v,i)=>v*(1-alpha)+material.fill[i]*alpha);assert(contrastRatio(material.ink,composite)>=4.5);}
  }
});
test('clear uses neutral transparent material and a readable opaque fallback',()=>{
  const a=materialForBackdrop([sample([15,40,50])],{kind:'clear'}),b=materialForBackdrop([sample([80,90,115])],{kind:'clear'});
  assert.equal(a.tone,b.tone);assert.deepEqual(a.ink,b.ink);assert.deepEqual(a.fill,b.fill);assert.notDeepEqual(a.ambient,b.ambient);
  assert.equal(a.fill[0],a.fill[1]);assert.equal(a.fill[1],a.fill[2],'clear glass must not add a blue/green tint');
  assert(a.alpha<.05&&a.contactAlpha<a.alpha,'resting and pressed clear glass stay transparent');
  assert(contrastRatio(a.ink,a.solid)>=4.5,'reduced transparency retains readable labels');
});

test('press clarifies calm material without making dense reading surfaces transparent',()=>{
  const samples=[sample([20,35,50])];
  const control=materialForBackdrop(samples),dialog=materialForBackdrop(samples,{large:true});
  assert(control.alpha<.4);assert(control.contactAlpha<control.alpha);
  assert.equal(dialog.contactAlpha,dialog.alpha);assert(dialog.alpha>=.92);
});
