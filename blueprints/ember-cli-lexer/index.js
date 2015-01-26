module.exports = {
  name: 'ember-cli-lexer',
  description: 'Initialize the ember-cli-lexer package.',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('lexer');
  }
};
