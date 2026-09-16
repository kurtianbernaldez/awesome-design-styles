import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {discover} from '../scripts/catalog.mjs';
import {pointerProfiles,pointerPosition} from '../dist/pointer-profiles.js';
const families=await discover(new URL('../',import.meta.url).pathname);
const css=await readFile(new URL('../dist/pointer-effects.css',import.meta.url),'utf8');

test('every published variant has an intentional, documented pointer policy',()=>{
  const variants=families.flatMap(f=>f.variants);
  assert.deepEqual(Object.keys(pointerProfiles).sort(),variants.map(v=>v.family+'/'+v.slug).sort());
  for(const v of variants){
    const p=pointerProfiles[v.family+'/'+v.slug];
    assert.equal(p.family,v.family);assert(p.size>0&&p.grid>0&&p.stretch>0&&p.weight>0);
    assert(['page','surface','none'].includes(p.mode),v.path+' invalid pointer mode');
    assert(p.rationale?.length>30,v.path+' missing pointer rationale');
    assert(v.markdown.includes(`**Pointer policy: ${p.mode}.** ${p.rationale}`),v.path+' missing pointer policy');
    const section=v.markdown.match(/## Pointer Effects\n([\s\S]*?)(?=\n## |$)/)?.[1];
    assert(section,v.path+' missing pointer section');
    if(p.mode==='none') {
      assert(section.includes('No decorative tracking'),v.path+' should explicitly omit tracking');
      assert(!section.includes('**Construction.**'),v.path+' should not prescribe an unused effect');
      continue;
    }
    if(p.family!=='liquid-glass')assert(css.includes(`[data-recipe="${p.recipe}"]`),v.path+' missing paint recipe');
    assert(section.includes(`### ${p.name}\n`),v.path+' missing pointer specification');
    for(const rule of ['pointer-events: none','prefers-reduced-motion','forced colors','persistent user opt-out'])assert(section.includes(rule),v.path+' missing '+rule);
    if(p.mode==='page') assert(section.includes('whole page'),v.path+' missing page coverage');
    if(p.mode==='surface') assert(section.includes('only the active material surface'),v.path+' missing local scope');
  }
});
test('active sibling effects differ and Liquid Glass keeps response on its controls',()=>{
  for(const family of families){
    const profiles=family.variants.map(v=>pointerProfiles[family.slug+'/'+v.slug]).filter(p=>p.mode!=='none');
    assert.equal(new Set(profiles.map(p=>p.name)).size,profiles.length,family.slug);
    assert.equal(new Set(profiles.map(p=>`${p.recipe}/${p.motion}/${p.size}/${p.grid}/${p.stretch}/${p.weight}`)).size,profiles.length,family.slug);
  }
  for(const family of ['glassmorphism','liquid-glass']) {
    const profiles=Object.values(pointerProfiles).filter(p=>p.family===family);
    assert.equal(profiles.length,3);
    assert(profiles.every(p=>p.mode===(family==='liquid-glass'?'surface':'page')),family+' material scope');
  }
  for(const family of ['minimalism','swiss','wabi-sabi','japandi']) {
    assert(Object.values(pointerProfiles).filter(p=>p.family===family).every(p=>p.mode==='none'));
  }
  assert(Object.values(pointerProfiles).filter(p=>p.family==='neumorphism').every(p=>p.mode==='surface'));
});
test('pointer coordinates clamp safely at edges and empty regions',()=>{
  for(const p of Object.values(pointerProfiles)){
    for(const [x,y,w,h] of [[-200,-30,300,100],[600,600,300,100],[300,100,301,101],[0,0,0,0]]){
      const pos=pointerPosition(p,x,y,w,h);
      assert(pos.x>=0&&pos.x<=w&&pos.y>=0&&pos.y<=h);
      assert(Object.values(pos).every(Number.isFinite));
      assert(Math.abs(pos.dx)<=.5&&Math.abs(pos.dy)<=.5);
    }
  }
});
test('pixel motion uses actual logical cells and glass reflection axes stay bounded',()=>{
  const pixel=pointerProfiles['pixel-art/grid-adventure'];
  assert.deepEqual([pointerPosition(pixel,19,28,400,300).x,pointerPosition(pixel,19,28,400,300).y],[16,32]);
  const glass=pointerPosition(pointerProfiles['glassmorphism/light-glass'],170,12,400,300);
  assert.equal(glass.x,170);assert.equal(glass.y,216);
});
