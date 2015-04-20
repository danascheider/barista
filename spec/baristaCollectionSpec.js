var Barista    = require(process.cwd() + '/lib/barista.js'),
    ExampleApp = require(process.cwd() + '/spec/ex1/exampleApp1.js'),
    context    = describe;

describe('Barista.Collection', function() {
  describe('isA', function() {
    it('returns true with arg \'Backbone.Collection\'', function() {
      var newCollection = new Barista.Collection();
      expect(newCollection.isA('Backbone.Collection')).toBe(true);
    });

    it('returns true with arg \'Barista.Collection\'', function() {
      var newCollection = new Barista.Collection();
      expect(newCollection.isA('Barista.Collection')).toBe(true);
    });

    it('returns false with another argument', function() {
      var newCollection = new Barista.Collection();
      expect(newCollection.isA('Porsche')).toBe(false);
    });
  });
});