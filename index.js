'use strict';

/**
 * This is the main chai plugin.
 *
 * @public
 * @function plugin
 * @param {Object} chai
 * @param {Object} utils
 */
module.exports = function(chai, utils) {
  var Assertion = chai.Assertion;

  Assertion.overwriteMethod('property', function(_super) {
    return function() {
      if (!utils.flag(this, 'objectBeforePropertyChain')) {
        utils.flag(this, 'objectBeforePropertyChain', this._obj);
      }
      _super.apply(this, arguments);
    };
  });

  Assertion.addProperty('also', function() {
    utils.flag(this, 'object', utils.flag(this, 'objectBeforePropertyChain'));
  });

};
