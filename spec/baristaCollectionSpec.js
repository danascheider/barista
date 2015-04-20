var Barista    = require(process.cwd() + '/lib/barista.js'),
    ExampleApp = require(process.cwd() + '/spec/ex1/exampleApp1.js'),
    Backbone   = require('backbone'),
    context    = describe;

describe('Barista.Collection', function() {
  var collection, model1, model2, spy;

  beforeEach(function() {
    Barista.config(ExampleApp);
  });

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

  describe('remove', function() {
    beforeEach(function() {
      spy = jasmine.createSpy();
      model1 = new Barista.TaskModel({title: 'Task 1'});
      model2 = new Barista.TaskModel({title: 'Task 2'});
      collection = new Barista.TaskCollection([model1, model2]);
      collection.on('remove', spy);
    });

    it('removes the model from the collection', function() {
      collection.remove([model1]);
      expect(collection.models).not.toContain(model1);
    });

    context('without the silent option', function() {
      it('triggers the \'remove\' event', function() {
        collection.remove([model1]);
        expect(spy).toHaveBeenCalled();
      });
    });

    context('with the silent option', function() {
      it('doesn\'t trigger the \'remove\' event', function() {
        collection.remove([model1], {silent: true});
        expect(spy).not.toHaveBeenCalled();
      });
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