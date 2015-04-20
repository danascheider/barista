var Barista    = require(process.cwd() + '/lib/barista.js'),
    ExampleApp = require(process.cwd() + '/spec/ex1/exampleApp1.js'),
    context    = describe;

describe('Barista', function() {
  it('has a Model property', function() {
    expect(typeof Barista.Model).not.toBe('undefined');
  });

  it('has a Collection property', function() {
    expect(typeof Barista.Collection).not.toBe('undefined');  
  });

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

  describe('Barista.config()', function() {

    // The config method takes an app object as input and extends Barista.Model
    // and Barista.Collection using the models and collections defined on the 
    // app object.

    // This example is taken from the spec/ex1 directory.

    it('creates a Barista.TaskModel object', function() {
      Barista.config(ExampleApp);
      expect(typeof Barista.TaskModel).not.toBe('undefined');
    });

    it('creates a Barista.TaskCollection object', function() {
      Barista.config(ExampleApp);
      expect(typeof Barista.TaskCollection).not.toBe('undefined');
    });

    it('extends the Barista.Model object', function() {
      spyOn(Barista.Model, 'extend');
      Barista.config(ExampleApp);
      expect(Barista.Model.extend).toHaveBeenCalledWith(ExampleApp.TaskModel);
    });

    it('extends the Barista.Collection object', function() {
      spyOn(Barista.Collection, 'extend');
      Barista.config(ExampleApp);
      expect(Barista.Collection.extend).toHaveBeenCalledWith(ExampleApp.TaskCollection);
    });
  });
});