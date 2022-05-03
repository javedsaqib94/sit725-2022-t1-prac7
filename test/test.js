var expect  = require("chai").expect;
var request = require("request");

describe("Add string and number", function() {
  let url = "http://localhost:3000/addTwoNumbers/a/3";
  it("should return status 200", function(done) {
      request(url, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done()
        });
  });
  it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body)
          expect(body.statusCode).to.equal(400);
          done()
        });
  });
  it("returns the result as null", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body)
          expect(body.result).to.be.a('null');
          done()
        });
  });
});

describe("Validate Projects api", function() {
    var url = "http://localhost:3000/api/projects";
    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns the result as array", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.data).to.be.a('array');
            done()
          });
    });
  });

  // describe("Add strings and number", function() {
  //   var url = "http://localhost:3000/addTwoNumbers/a/5";
  //   it("should return status 200", function(done) {
  //     request(url, function(error, response, body) {
  //         expect(response.statusCode).to.equal(200);
  //         done()
  //       });
  // });
  //   it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
  //       request(url, function(error, response, body) {
  //           body = JSON.parse(body)
  //           expect(body.statusCode).to.equal(400);
  //           done()
  //         });
  //   });
  //   it("returns the result as null", function(done) {
  //       request(url, function(error, response, body) {
  //           body = JSON.parse(body)
  //           expect(body.result).to.be.a('null');
  //           done()
  //         });
  //   });
  // });

  // describe("Add strings and speacial character", function() {
  //   var url = "http://localhost:3000/addTwoNumbers/a/#";
  //   it("should return status 200", function(done) {
  //       request(url, function(error, response, body) {
  //           expect(response.statusCode).to.equal(200);
  //           done()
  //         });
  //   });
  //   it("returns statusCode = 400", function(done) {
  //       request(url, function(error, response, body) {
  //           body = JSON.parse(body)
  //           expect(body.statusCode).to.equal(400);
  //           done()
  //         });
  //   });
  // });