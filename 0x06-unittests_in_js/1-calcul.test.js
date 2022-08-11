// This script will test calcul

const { calculateNumber } = require('./1-calcul.js');
const assert = require('assert');

describe('calculate Summation', () => {
  it('...', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 0.9), 2);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUM', 1, -1.2), 0);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUM', 0.99, -1.2), 0);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 1.5), 4);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUM', -9.65, -23.56), -34);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUM', 56.0, -9.6), 46);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUM', 0.01, -1.2), -1);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 0.9), 0);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, -1.2), 2);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 0.99, -1.2), 2);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -9.65, -23.56), 14);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 56.0, -9.6), 66);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 0.01, -1.2), 1);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 0.9), 1);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, -1.2), -1);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 0.99, -1.2), -1);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 1.5), 1);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -27.46, 9.3), -3);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 56.0, -9.6), -5.6);
  });
  it('...', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});
