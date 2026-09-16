import test from 'node:test';
import assert from 'node:assert/strict';
import {samplePointer,pointerEnergy,sweptSurface} from '../dist/pointer-kinetics.js';

test('pointer velocity measures travel per second consistently across input event rates', () => {
  const travel = interval => {
    let point = samplePointer(null, 0, 0, 0);
    for (let time = interval; time <= 160; time += interval) {
      point = samplePointer(point, time, time / 2, time);
    }
    return point;
  };
  const slowEvents = travel(16), fastEvents = travel(8);
  assert(Math.abs(slowEvents.speed - fastEvents.speed) < 1);
  assert(Math.abs(fastEvents.vx - 1000) < 10);
  assert(Math.abs(fastEvents.vy - 500) < 10);
});

test('fast motion has greater energy while extreme input stays bounded', () => {
  const origin = samplePointer(null, 0, 0, 0);
  const slow = samplePointer(origin, 4, 0, 16);
  const fast = samplePointer(origin, 80, 60, 16);
  const jump = samplePointer(origin, 1e8, -1e8, 1);
  assert(pointerEnergy(fast, 16) > pointerEnergy(slow, 16) * 4);
  assert(jump.speed <= 2400.000001);
  assert(jump.vx > 0 && jump.vy < 0);
  assert(pointerEnergy(jump, 1) <= 1);
});

test('stationary input and pauses dissipate motion rather than sustaining an idle effect', () => {
  let point = samplePointer(samplePointer(null, 0, 0, 0), 80, 0, 16);
  const energy = pointerEnergy(point, 16);
  assert(energy > 0);
  assert(pointerEnergy(point, 160) < energy);
  assert.equal(pointerEnergy(point, 1500), 0);
  for (let time = 32; time <= 320; time += 16) point = samplePointer(point, 80, 0, time);
  assert(point.speed < .2);
  assert.equal(pointerEnergy(point, 2000), 0);
  assert.equal(pointerEnergy(null, 0), 0);
});

test('first events, invalid time ordering, and resumed input do not create synthetic flicks', () => {
  const initial = samplePointer(null, 10000, 5000, 50);
  assert.equal(initial.speed, 0);
  for (const time of [50, 49, 1000]) {
    const result = samplePointer(initial, 20000, -10000, time);
    assert.equal(result.speed, 0);
    assert.equal(result.vx, 0);
    assert.equal(result.vy, 0);
  }
});

test('swept pointers excite a skipped control only when their path intersects it', () => {
  const rect = {left:100, right:200, top:100, bottom:160};
  const point = (x, y, time = 16) => ({x, y, time});
  assert(sweptSurface(point(20, 130, 0), point(280, 130), rect, 0));
  assert(sweptSurface(point(150, 20, 0), point(150, 250), rect, 0));
  assert(sweptSurface(point(20, 20, 0), point(250, 250), rect, 0));
  assert(!sweptSurface(point(20, 30, 0), point(280, 30), rect, 0));
  assert(!sweptSurface(point(250, 20, 0), point(250, 250), rect, 0));
  assert(!sweptSurface(point(20, 130, 0), point(60, 130), rect, 0));
  assert(!sweptSurface(point(20, 130, 0), point(280, 130, 1000), rect));
  assert(!sweptSurface(null, point(150, 130), rect));
});

test('surface proximity is bounded and handles stationary positions at its edge', () => {
  const rect = {left:100, right:200, top:100, bottom:160};
  assert(sweptSurface({x:80,y:85,time:0}, {x:220,y:85,time:16}, rect));
  assert(!sweptSurface({x:80,y:75,time:0}, {x:220,y:75,time:16}, rect));
  assert(sweptSurface({x:100,y:120,time:0}, {x:100,y:120,time:16}, rect, 0));
  assert(!sweptSurface({x:90,y:120,time:0}, {x:90,y:120,time:16}, rect, 0));
});
