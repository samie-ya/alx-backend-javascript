// This script will test calcul

const calculateNumber = require('./0-calcul');
const assert = require('assert');


describe('calculateNumber', () => {
  it('Testing 1 + 0 is 1', () => {
    assert.strictEqual(calculateNumber(1, 0), 1);
  });

  it('Testing 1 + -1.2 is 0', () => {
    assert.strictEqual(calculateNumber(1, -1.2), 0);
  });

  it('Testing 0.99 + -1.2 is 0', () => {
    assert.strictEqual(calculateNumber(0.99, -1.2), 0);
  });

  it('Testing 1.5 + 1.5 is 4', () => {
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
  });

  it('Testing -9.65 + -23.56 is -34', () => {
    assert.strictEqual(calculateNumber(-9.65, -23.56), -34);
  });

  it('Testing 76 + -1 is 75', () => {
    assert.strictEqual(calculateNumber(76, -1), 75);
  });

  it('Testing 345.1 + 1.9 is 347', () => {
    assert.strictEqual(calculateNumber(345.1, 1.9), 347);
  });

  it('Testing 0 + 0 is 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('Testing -100 + 100.8 is 1', () => {
    assert.strictEqual(calculateNumber(-100, 100.8), 1);
  });

  it('Testing 134567 + -1.2 is 134566', () => {
    assert.strictEqual(calculateNumber(134567, -1.2), 134566);
  });

  it('Testing 56.0 + -9.6 is 46', () => {
    assert.strictEqual(calculateNumber(56.0, -9.6), 46);
  });

  it('Testing 0.01 + -1.2 is -1', () => {
    assert.strictEqual(calculateNumber(0.01, -1.2), -1);
  });
});
