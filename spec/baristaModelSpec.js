var Barista    = require(process.cwd() + '/lib/barista.js'),
    Backbone   = require('backbone'),
    ExampleApp = require(process.cwd() + '/spec/ex1/exampleApp1.js'),
    context    = describe;

describe('Barista.Model', function() {
  var model;

  beforeEach(function() {
    Barista.config(ExampleApp);
  });

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

  describe('sync', function() {
    beforeEach(function() {
      model = new Barista.TaskModel();
      spyOn(Backbone, 'sync');
    });

    it('does not call Backbone.sync', function() {
      model.sync();
      expect(Backbone.sync).not.toHaveBeenCalled();
    });

    it('empties the model.changed object', function() {
      model.set('priority', 'High');
      model.sync();
      expect(model.changed).toEqual({});
    });

    it('returns the model', function() {
      expect(model.sync()).toBe(model);
    });

    context('without silent option', function() {
      it('triggers the \'change\' event', function() {
        var spy = jasmine.createSpy();
        model.on('change', spy);
        model.sync();
        expect(spy).toHaveBeenCalled();
        model.off('change');
      });
    });
  });

  describe('get', function() {
    beforeEach(function() {
      model = new Barista.TaskModel({title: 'Foobar'});
    });

    it('retrieves the object\'s attribute', function() {
      expect(model.get('title')).toBe('Foobar');
    });
  });

  describe('set', function() {
    it('sets attributes on the model', function() {
      model = new Barista.TaskModel();
      model.set('priority', 'urgent');
      expect(model.get('priority')).toBe('urgent');
    });
  });
});