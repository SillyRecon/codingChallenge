// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);
var app = require('../index');

describe("Testing the Server", function() {
  //Testing access to the index page
  it('should get the root page on / GET', function(done) {
    chai.request(app)
      .get('/')
      .end(function(err, res){
        should.exist(res);
        res.should.have.status(200);
        done();
      });
  });
  //Testing access to the elements page
  it('should get the elements page on / GET', function(done) {
    chai.request(app)
      .get('/elements')
      .end(function(err, res){
        should.exist(res);
        res.should.have.status(200);
        done();
      });
  });

});
