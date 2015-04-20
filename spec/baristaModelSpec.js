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
  });

  describe('get', function() {
    beforeEach(function() {
      model = new Barista.TaskModel({title: 'Foobar'});
    });

    it('retrieves the object\'s attribute', function() {
      expect(model.get('title')).toBe('Foobar');
    });
  });
});