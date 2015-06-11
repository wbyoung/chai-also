'use strict';

var chai = require('chai');

// reset chai.Assertion's prototype. this is required to support mocha
// re-running the test suite in watch mode.
var prototype = chai.Assertion.prototype;
chai.holdProperty = chai.holdProperty || prototype.property;
prototype.property = chai.holdProperty;

chai.use(require('..'));

global.expect = chai.expect;
global.should = chai.should();
