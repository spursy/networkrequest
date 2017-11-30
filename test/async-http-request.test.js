/**
 * created by spursyy at 2017-11-30
 */
//async-http-request.test.js
var add = require('../lib/async-http-request.js');
var expect = require('chai').expect;

//test suite
describe('加法函数的测试', function() {
    //test case

  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});