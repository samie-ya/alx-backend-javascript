// This script will test a promise

const { getPaymentTokenFromAPI } = require('./6-payment_token.js');
const assert = require('assert');

describe('Testing a promise', () => {
  it('Testing a promise when success is true', (done) => {
    const resolved = getPaymentTokenFromAPI(true);
    const given = { data: 'Successful response from the API' };
    assert(resolved, given);
    done();
  });
});
