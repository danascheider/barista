var _        = require('underscore'),
    Backbone = require('backbone');

var Model = Backbone.Model.extend({
  types: ['Backbone.Model', 'Barista.Model'],
  isA  : function(type) {
    return this.types.indexOf(type) > -1;
  }
})

_.extend(Model.prototype, Backbone.Events, {
  changed: null,
  validationError: null,
  idAttribute    : 'id',
  initialize     : function() {},
  toJSON         : function(options) {
    return _.clone(this.attributes)
  },
  sync           : function() {},
});

Model.prototype.extend = function(obj) {
  return _.extend(this, obj);
};

module.exports = Model;