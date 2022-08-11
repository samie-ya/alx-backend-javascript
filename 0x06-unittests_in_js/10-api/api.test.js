// This script will tst a running server

const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Whole page', () => {
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
  it('Testing response of a request', (done) => {
    request('http://localhost:7865/available_payments', (error, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
    });
    done();
  });
  it('Testing body of a request', (done) => {
    request('http://localhost:7865/available_payments', (error, resp, body) => {
      expect(body).to.deep.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
    });
    done();
  });
  it('Testing response of a request', (done) => {
    request.post('http://localhost:7865/login', (error, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
    });
    done();
  });
  it('Testing type of body of a request', (done) => {
    request.post('http://localhost:7865/login', (error, resp, body) => {
      expect(body).to.be.a('string');
    });
    done();
  });
  it('Testing body of a request', (done) => {
    request.post({ headers: { 'Content-Type': 'application/json' }, url: 'http://localhost:7865/login', form: { userName: 'Samra' } }, (error, resp, body) => {
      expect(body).to.be.equal('Welcome Samra');
    });
    done();
  });
  it('Testing type of body of a request', (done) => {
    request.post({ headers: { 'Content-Type': 'application/json' }, url: 'http://localhost:7865/login', form: { userName: 'Samra' } }, (error, resp, body) => {
      expect(body).to.be.a('string');
    });
    done();
  });
});
