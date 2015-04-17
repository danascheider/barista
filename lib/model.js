function Model() {
  return {
    types: ['Backbone.Model', 'Barista.Model'],
    isA  : function(type) {
      return this.types.indexOf(type) > -1;
    }
  };
};

module.exports = Model;