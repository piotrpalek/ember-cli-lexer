/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-lexer',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/lexer/lexer.js');
    app.import('vendor/lexer-shim/lexer-shim.js');
  }
};
