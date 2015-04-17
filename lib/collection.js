function Collection() {
  return {
    types: ['Backbone.Collection', 'Barista.Collection'],
    isA  : function(type) {
      return this.types.indexOf(type) > -1;
    }
  }
};

module.exports = Collection;