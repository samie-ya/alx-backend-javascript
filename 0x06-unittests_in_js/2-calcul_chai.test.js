// This script will test calcul

const { calculateNumber } = require('./2-calcul_chai.js');
const chai = require('chai');
const assert = require('assert');
const expect = chai.expect

describe('calculate Summation', () => {
  it('...', () => {
    expect(calculateNumber('SUM', 1.2, 0.9)).to.equal(2);
  });
  it('...', () => {
    expect(calculateNumber('SUM', 1, -1.2)).to.equal(0);
  });
  it('...', () => {
    expect(calculateNumber('SUM', 0.99, -1.2)).to.equal(0);
  });
  it('...', () => {
    expect(calculateNumber('SUM', 1.5, 1.5)).to.equal(4);
  });
  it('...', () => {
    expect(calculateNumber('SUM', -9.65, -23.56)).to.equal(-34);
  });
  it('...', () => {
    expect(calculateNumber('SUM', 56.0, -9.6)).to.equal(46);
  });
  it('...', () => {
    expect(calculateNumber('SUM', 0.01, -1.2)).to.equal(-1);
  });
});

describe('calculate Subtraction', () => {
  it('...', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 0.9)).to.equal(0);
  });
  it('...', () => {
    expect(calculateNumber('SUBTRACT', 1, -1.2)).to.equal(2);
  });
  it('...', () => {
    expect(calculateNumber('SUBTRACT', 0.99, -1.2)).to.equal(2);
  });
  it('...', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
  });
  it('...', () => {
    expect(calculateNumber('SUBTRACT', -9.65, -23.56)).to.equal(14);
  });
  it('...', () => {
    expect(calculateNumber('SUBTRACT', 56.0, -9.6)).to.equal(66);
  });
  it('...', () => {
    expect(calculateNumber('SUBTRACT', 0.01, -1.2)).to.equal(1);
  });
});

describe('calculate Divide', () => {
  it('...', () => {
    expect(calculateNumber('DIVIDE', 1.2, 0.9)).to.equal(1);
  });
  it('...', () => {
    expect(calculateNumber('DIVIDE', 1, -1.2)).to.equal(-1);
  });
  it('...', () => {
    expect(calculateNumber('DIVIDE', 0.99, -1.2)).to.equal(-1);
  });
  it('...', () => {
    expect(calculateNumber('DIVIDE', 1.5, 1.5)).to.equal(1);
  });
  it('...', () => {
    expect(calculateNumber('DIVIDE', -27.46, 9.3)).to.equal(-3);
  });
  it('...', () => {
    expect(calculateNumber('DIVIDE', 56.0, -9.6)).to.equal(-5.6);
  });
  it('...', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
});
