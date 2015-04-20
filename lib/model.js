var _        = require('underscore'),
    Backbone = require('backbone');

function Model() {
  this.types = ['Backbone.Model', 'Barista.Model'];
  this.isA   = function(type) {
    return this.types.indexOf(type) > -1;
  };
  
  return this;
};

_.extend(Model.prototype, Backbone.Events, {
  changed: null,
  validationError: null,
  idAttribute    : 'id',
  initialize     : function() {},
  toJSON         : function(options) {
    return _.clone(this.attributes)
  },
  //
});

Model.prototype.extend = function(obj) {
  return _.extend(this, obj);
};

module.exports = Model;