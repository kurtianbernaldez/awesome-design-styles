import test from 'node:test';
import assert from 'node:assert/strict';
import { createLensMap, advanceSpring } from '../dist/liquid-glass.js';

function pixel(map, x, y) {
  const column = Math.max(0, Math.min(map.width - 1, Math.round(x)));
  const row = Math.max(0, Math.min(map.height - 1, Math.round(y)));
  const offset = (row * map.width + column) * 4;
  return Array.from(map.data.subarray(offset, offset + 4));
}

test('lens displacement maps preserve surface proportions without unbounded texture allocation', () => {
  for (const [width, height, radius] of [[360, 160, 40], [160, 360, 40], [10000, 4000, 180]]) {
    const map = createLensMap(width, height, radius);
    assert(Number.isInteger(map.width) && map.width > 0);
    assert(Number.isInteger(map.height) && map.height > 0);
    assert(map.data instanceof Uint8ClampedArray);
    assert.equal(map.data.length, map.width * map.height * 4);
    assert(Math.abs(map.width / map.height - width / height) / (width / height) < .025,
      'downsampling must not turn a pill into a circular lens');
    assert(map.width * map.height <= 1024 * 1024, 'large surfaces need a bounded displacement texture');
    for (let offset = 3; offset < map.data.length; offset += 4) {
      assert.equal(map.data[offset], 255, 'displacement data must remain opaque');
    }
  }
});

test('rounded lenses keep their center and clipped corners optically neutral', () => {
  const map = createLensMap(360, 160, 40);
  const neutral = (point, label) => {
    assert(Math.abs(point[0] - 128) <= 1 && Math.abs(point[1] - 128) <= 1, label);
  };
  neutral(pixel(map, map.width / 2, map.height / 2), 'center must not displace readable content');
  for (const [x, y] of [[0, 0], [map.width - 1, 0], [0, map.height - 1], [map.width - 1, map.height - 1]]) {
    neutral(pixel(map, x, y), 'rounded-off corners must not contain rectangular-edge refraction');
  }
});

test('opposing lens rims sample the backdrop inward instead of translating it uniformly', () => {
  const map = createLensMap(360, 160, 40);
  const middleX = Math.floor(map.width / 2);
  const middleY = Math.floor(map.height / 2);
  const left = [], right = [], top = [], bottom = [];
  for (let x = 0; x < Math.floor(map.width / 4); x++) {
    left.push(pixel(map, x, middleY)[0]);
    right.push(pixel(map, map.width - 1 - x, middleY)[0]);
  }
  for (let y = 0; y < Math.floor(map.height / 4); y++) {
    top.push(pixel(map, middleX, y)[1]);
    bottom.push(pixel(map, middleX, map.height - 1 - y)[1]);
  }
  assert(Math.max(...left) > 144, 'left rim must sample pixels to its right');
  assert(Math.min(...right) < 112, 'right rim must sample pixels to its left');
  assert(Math.max(...top) > 144, 'top rim must sample pixels below it');
  assert(Math.min(...bottom) < 112, 'bottom rim must sample pixels above it');
  assert(new Set(left).size > 4 && new Set(top).size > 4, 'rounded edges need a graduated optical profile');
});

test('lens maps are deterministic across rebuilds of the same surface', () => {
  const first = createLensMap(280, 72, 36);
  const second = createLensMap(280, 72, 36);
  assert.equal(first.width, second.width);
  assert.equal(first.height, second.height);
  assert.deepEqual(first.data, second.data);
});

function settle(dt, duration, target = 1) {
  const state = { value: 0, velocity: 0 };
  const samples = [];
  for (let elapsed = 0; elapsed < duration - dt / 2; elapsed += dt) {
    advanceSpring(state, target, dt);
    assert(Number.isFinite(state.value) && Number.isFinite(state.velocity));
    samples.push(state.value);
  }
  return { state, samples };
}

test('liquid spring settles at both 60 Hz and 120 Hz without runaway oscillation', () => {
  for (const dt of [.016, .008]) {
    const { state, samples } = settle(dt, 5);
    assert(Math.abs(state.value - 1) < .001, 'motion must settle at its requested destination');
    assert(Math.abs(state.velocity) < .01, 'settled optics must not keep animating');
    assert(Math.min(...samples) >= -.1 && Math.max(...samples) <= 1.35, 'elastic deformation must remain bounded');
    assert(samples.some(value => value > 0 && value < .95), 'the material must deform progressively');
  }
  const sixty = settle(.016, .24).state.value;
  const oneTwenty = settle(.008, .24).state.value;
  assert(Math.abs(sixty - oneTwenty) < .1, 'refresh rate must not substantially change the liquid response');
});

test('liquid spring handles retargeting and a suspended-tab time step safely', () => {
  const state = { value: 0, velocity: 0 };
  for (let frame = 0; frame < 10; frame++) advanceSpring(state, 1, .016);
  advanceSpring(state, -1, 60);
  assert(Number.isFinite(state.value) && Number.isFinite(state.velocity));
  assert(Math.abs(state.value) < 3, 'resuming a tab must not launch the lens offscreen');
  for (let frame = 0; frame < 400; frame++) advanceSpring(state, -1, .016);
  assert(Math.abs(state.value + 1) < .001);
  assert(Math.abs(state.velocity) < .01);
});

test('convex refraction extends through the shoulder while preserving the center',()=>{
  const map=createLensMap(360,160,40);
  assert(pixel(map,180,32)[1]>145,'background bends well beyond a thin rim');
  assert(Math.abs(pixel(map,180,80)[1]-128)<=1,'center stays optically neutral');
});

test('short navigation lenses preserve the order of backdrop pixels at maximum pressure',()=>{
  const strength=80,map=createLensMap(1000,68,34,strength);
  const x=Math.floor(map.width/2);
  let previous=-Infinity;
  for(let y=0;y<map.height;y++){
    const sampledY=y+(pixel(map,x,y)[1]/255-.5)*strength;
    assert(sampledY>previous,'the optical shoulder must not fold or reverse the scene');
    previous=sampledY;
  }
});
