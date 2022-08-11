// This script will tst a running server

const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Cart page', () => {
  it('Testing response of a request', (done) => {
    request('http://localhost:7865/cart/12', (error, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
    });
    done();
  });
  it('Testing body of a request', (done) => {
    request('http://localhost:7865/cart/12', (error, resp, body) => {
      expect(body).to.be.equal('Payment methods for cart 12');
    });
    done();
  });
  it('Testing type of body of a requets', (done) => {
    request('http://localhost:7865/cart/12', (error, resp, body) => {
      expect(body).to.be.a('string');
    });
    done();
  });
  it('Testing failure of request', (done) => {
    request('http://localhost:7865/cart/hello', (error, resp, body) => {
      expect(resp.statusCode).to.be.equal(404);
    });
    done();
  });
});
