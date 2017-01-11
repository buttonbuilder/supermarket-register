var should = require('should');
var request = require('supertest');
request = request('http://localhost:3000')

describe('cart.js', function () {
  describe('Invalid  Body', function (){
    it('should give a 400 with a missing key', function(done){
      request.post('/cart').
      send({"iteList":"jdhfsjbwkrsns,testing123"}).expect(400 ,done)
    });
    it('should give a 400 with no body', function(done){
      request.post('/cart').expect(400,done)
    });
    it('should give a 200 with a right request body', function(done){
      request.post('/cart').send({"itemList":"A12T-4GH7-QPL9-3N4M"}).expect(200,done)
    });
  });
});
