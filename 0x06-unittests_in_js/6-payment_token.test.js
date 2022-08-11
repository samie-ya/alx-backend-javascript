// This script will test a promise

const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect

describe('Testing a promise', () => {
  it('Testing a promise when success is true', (done) => {
    const resolved = getPaymentTokenFromAPI(true);
    //const given = { data: 'Successful response from the API' };
    expect(resolved).to.be.a('Promise');
    done();
  });
});
