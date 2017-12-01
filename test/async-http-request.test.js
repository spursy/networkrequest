/**
 * created by spursyy at 2017-11-30
 */
//async-http-request.test.js
var httprequest = require('../lib/async-http-request.js');
var httsprequest = require('../lib/async-https-request.js');
var expect = require('chai').expect;

//test suite
describe('net work request fun', function() {
    //test case

  it('get json test', function() {
    httsprequest.getJson("https://www.npmjs.com/search?q=request").then(  (data)=> {
      console.log("data>>>>>" + JSON.stringify(data));
    }, (err) => {
      console.log("err>>>>>" + JSON.stringify(err));
    })});
})