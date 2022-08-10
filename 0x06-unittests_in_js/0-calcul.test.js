// This script will test calcul

const { calculateNumber } = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('...', () => {
    assert.strictEqual(calculateNumber(1, 0), 1);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber(1, -1.2), 0);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber(0.99, -1.2), 0);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber(-9.65, -23.56), -34);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber(76, -1), 75);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber(345.1, 1.9), 347);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber(-100, 100.8), 1);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber(134567, -1.2), 134566);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber(56.0, -9.6), 46);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber(0.01, -1.2), -1);
  });
});
