// This script will tst a running server

const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
  it('Testing response of a request', (done) => {
    request('http://localhost:7865', (error, resp, body) => {
        expect(resp.statusCode).to.be.equal(200);
      });
    done();
  });
  it('Testing body of a request', (done) => {
    request('http://localhost:7865', (error, resp, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
    });
    done();
  });
  it('Testing type of body', (done) => {
    request('http://localhost:7865', (error, resp, body) => {
      expect(body).to.be.a('string');
    });
    done();
  });
});
