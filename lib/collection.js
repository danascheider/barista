var _ = require('underscore');

function Collection() {
  return {
    types  : ['Backbone.Collection', 'Barista.Collection'],
    extend : function(obj) {
      return _.extend(this, obj);
    },
    isA    : function(type) {
      return this.types.indexOf(type) > -1;
    }
  }
};

module.exports = Collection;