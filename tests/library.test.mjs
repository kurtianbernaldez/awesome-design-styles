import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { discover, parseDesign } from '../scripts/catalog.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const families=await discover(root);
const designs=families.flatMap(f=>f.variants);
const expected=['minimalism/clean-product','minimalism/editorial','minimalism/monochrome','brutalism/raw-web','brutalism/editorial','brutalism/colorful','glassmorphism/dark-glass','glassmorphism/light-glass','glassmorphism/vibrant-glass'];
test('all requested families have complete discoverable variants',()=>{
  assert.equal(families.length,38);assert.equal(designs.length,44);
  assert.deepEqual(designs.slice(0,9).map(v=>`${v.family}/${v.slug}`),expected);
  assert(families.some(f=>f.slug==='solarpunk' && f.variants.some(v=>v.slug==='organic')));
  assert(families.every(f=>f.variants.length>0));
});
test('metadata parser rejects malformed, duplicate, and path-mismatched files',()=>{
  const sample=designs[0];
  assert.throws(()=>parseDesign('No metadata','minimalism','clean-product'),/frontmatter/);
  assert.throws(()=>parseDesign(sample.markdown,'brutalism','clean-product'),/disagree/);
  assert.throws(()=>parseDesign(sample.markdown.replace('tags:','unknown: test\ntags:'),sample.family,sample.slug),/unsupported/);
  assert.throws(()=>parseDesign(sample.markdown.replace('tags:','name: Duplicate\ntags:'),sample.family,sample.slug),/duplicate/);
});
test('every design covers complete interface behavior with no unresolved placeholders',()=>{
  for(const v of designs){
    for(const heading of ['Core Principles','Color System','Typography','Spacing','Layout and Grid','Components','Buttons','Forms','Cards','Navigation and Menus','Tabs','Modals and Overlays','Badges and Feedback','Icons, Imagery, and Illustration','Data Visualization','Motion and Animation','Interaction States','Responsive Behavior','Accessibility','Implementation Guidance','Do',"Don't"]){
      assert(v.markdown.includes(` ${heading}\n`),`${v.path}: missing ${heading}`);
    }
    assert(!/\b(?:TODO|TO_FILL|TBD)\b/.test(v.markdown),v.path);
    assert(v.markdown.includes('Focus-visible'),`${v.path}: missing focus guidance`);
  }
});
test('built downloads match source byte-for-byte and deep routes have matching titles',async()=>{
  for(const f of families){assert((await readFile(path.join(root,'dist/styles',f.slug,'index.html'),'utf8')).includes(`${f.name} — Form Atlas`));}
  for(const v of designs){
    assert.equal(await readFile(path.join(root,'dist',v.path),'utf8'),v.markdown);
    assert((await readFile(path.join(root,'dist/styles',v.family,v.slug,'index.html'),'utf8')).includes(`${v.name} — Form Atlas`));
  }
  assert.deepEqual(JSON.parse(await readFile(path.join(root,'dist/catalog.json'),'utf8')),families);
});
function luminance(hex){const rgb=hex.replace('#','').match(/../g).map(c=>parseInt(c,16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;}
function contrast(a,b){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
test('documented opaque text and control token pairs meet their contrast targets',()=>{
  for(const v of designs){const tokens=Object.fromEntries([...v.markdown.matchAll(/^\| `([a-z-]+)` \| `(#[0-9a-f]{6})`/gm)].map(m=>[m[1],m[2]]));
    for(const name of ['ink','muted','error','success','warning']) assert(contrast(tokens[name],tokens.surface)>=4.5,`${v.path}: ${name}/surface`);
    assert(contrast(tokens['on-accent'],tokens.accent)>=4.5,`${v.path}: action label`);
    assert(contrast(tokens['control-line'],tokens.surface)>=3,`${v.path}: control boundary`);
  }
});
test('glass composites preserve readable text over all specified gradient endpoints',()=>{
  const environments={'dark-glass':['#111e2c','#29465d'],'light-glass':['#e9f0f4','#dce9ee'],'vibrant-glass':['#241c43','#6745a1','#94486b','#246879']};
  const alpha={'dark-glass':.88,'light-glass':.86,'vibrant-glass':.90};
  const rgb=hex=>hex.slice(1).match(/../g).map(x=>parseInt(x,16));
  for(const v of designs.filter(v=>v.family==='glassmorphism')){
    const t=Object.fromEntries([...v.markdown.matchAll(/^\| `([a-z-]+)` \| `(#[0-9a-f]{6})`/gm)].map(m=>[m[1],m[2]]));
    for(const bg of environments[v.slug]){const base=rgb(bg);const surface=rgb(t.surface);const composite='#'+surface.map((c,i)=>Math.round(c*alpha[v.slug]+base[i]*(1-alpha[v.slug])).toString(16).padStart(2,'0')).join('');for(const fg of ['ink','muted'])assert(contrast(t[fg],composite)>=4.5,`${v.path}: ${fg} over ${bg}`);}
  }
});
test('showcase anchor targets and ARIA references resolve, and local assets exist',async()=>{
  for(const file of ['index.html','preview.html']){
    const html=await readFile(path.join(root,'dist',file),'utf8');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,`${file}: duplicate IDs`);
    for(const match of html.matchAll(/(?:aria-controls|aria-labelledby|for)="([^"]+)"/g)){for(const id of match[1].split(' '))assert(ids.includes(id),`${file}: missing ${id}`);}
    for(const match of html.matchAll(/(?:src|href)="(\/[a-z]+\.(?:js|css))"/g))assert((await readFile(path.join(root,'dist',match[1]))).length>0);
    for(const match of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(match[1]),`${file}: missing anchor ${match[1]}`);
  }
});
test('license retains the original MIT notice',async()=>{
  const license=await readFile(path.join(root,'LICENSE'),'utf8');assert(license.includes('Copyright (c) 2026 VoltAgent'));assert(license.includes('Permission is hereby granted'));
});
test('server returns root, every family and variant, Markdown, assets, and real 404s',async()=>{
  const {handleRequest}=await import('../scripts/serve.mjs');
  async function request(url){let status,headers,body;await handleRequest({url,method:'GET'},{writeHead(s,h){status=s;headers=h;},end(value){body=String(value);}});return {status,headers,body};}
  for(const route of ['/', '/app.js','/preview.html','/themes.css',...families.map(f=>`/styles/${f.slug}`),...designs.flatMap(v=>[`/styles/${v.family}/${v.slug}`,`/${v.path}`])]){
    const response=await request(route);assert.equal(response.status,200,route);assert(response.body.length>0,route);
  }
  assert.equal((await request('/styles/unknown-family')).status,404);
  assert.equal((await request('/styles/minimalism/missing')).status,404);
  assert.equal((await request('/..%2fLICENSE')).status,403);
  assert.equal((await request('/%zz')).status,400);
});
test('every style directory has a complete file and every landing card has a real theme',async()=>{
  const directories=(await readdir(path.join(root,'styles'),{withFileTypes:true})).filter(d=>d.isDirectory());
  const thumbs=await readFile(path.join(root,'dist/thumbnails.css'),'utf8');
  for(const dir of directories){
    const family=families.find(f=>f.slug===dir.name);assert(family,`${dir.name}: unfinished family`);
    assert(thumbs.includes(`[data-card-theme="${family.slug}/${family.variants[0].slug}"]`),`${dir.name}: missing thumbnail`);
    assert(!(await readFile(path.join(root,'styles',dir.name,'README.md'),'utf8')).includes('Planned family'));
  }
});
