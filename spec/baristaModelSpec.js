var Barista    = require(process.cwd() + '/lib/barista.js'),
    ExampleApp = require(process.cwd() + '/spec/ex1/exampleApp1.js'),
    context    = describe;

describe('Barista.Model', function() {
  describe('isA', function() {
    it('returns true with arg \'Backbone.Model\'', function() {
      var newModel = new Barista.Model();
      expect(newModel.isA('Backbone.Model')).toBe(true);
    });

    it('returns true with arg\'Barista.Model\'', function() {
      var newModel = new Barista.Model();
      expect(newModel.isA('Barista.Model')).toBe(true);
    });

    it('returns false with another argument', function() {
      var newModel = new Barista.Model();
      expect(newModel.isA('Barista.Collection')).toBe(false);
    });
  });
});