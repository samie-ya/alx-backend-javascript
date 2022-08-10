// This script will create a spy test

const { Utils } = require('./utils.js');
const { sendPaymentRequestToApi } = require('./3-payment.js');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('Spying on calculateNumber', () => {
  it('I spy with my little eye', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWith('SUM', 100, 20)).to.be.true;
  });
});
