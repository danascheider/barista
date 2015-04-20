var _        = require('underscore'),
    Backbone = require('backbone');

var Collection = Backbone.Collection.extend({
  types : ['Backbone.Collection', 'Barista.Collection'],
  isA   : function(type) {
    return this.types.indexOf(type) > -1;
  }
});

module.exports = Collection;