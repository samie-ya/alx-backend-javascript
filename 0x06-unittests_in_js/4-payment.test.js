// This script will create a spy test

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('Stubing on calculateNumber', () => {
  it('I spy with my little eye', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.withArgs('SUM', 100, 20).returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 10')).to.be.true;
    stub.restore();
    spy.restore();
  });
});
