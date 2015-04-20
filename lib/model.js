var _ = require('underscore');

function Model() {
  return {
    types  : ['Backbone.Model', 'Barista.Model'],
    isA    : function(type) {
      return this.types.indexOf(type) > -1;
    }
  };
};

Model.prototype.extend = function(obj) {
  return _.extend(this, obj);
};

module.exports = Model;