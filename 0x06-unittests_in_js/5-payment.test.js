// This script will create a spy test

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('Testing sendPaymentRequestToApi', () => {
  beforeEach(() => {
    const spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Testing sendPaymentRequestToApi with 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });

  it('Testing sendPaymentRequestToApi with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledWith('The total is: 20')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });
});
