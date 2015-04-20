var Barista    = require(process.cwd() + '/lib/barista.js'),
    ExampleApp = require(process.cwd() + '/spec/ex1/exampleApp1.js'),
    Backbone   = require('backbone'),
    context    = describe;

describe('Barista.Collection', function() {
  var collection, spy;

  describe('properties', function() {
    it('has model Barista.Model by default', function() {
      expect(Barista.Collection.prototype.model).toBe(Barista.Model);
    });
  });

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

  describe('sync', function() {
    beforeEach(function() {
      spyOn(Backbone, 'sync');
      collection = new Barista.Collection();
    });

    it('doesn\'t call Backbone.sync', function() {
      collection.sync();
      expect(Backbone.sync).not.toHaveBeenCalled();
    });

    it('returns the collection', function() {
      expect(collection.sync()).toBe(collection);
    });
  });
});