var Barista = require(process.cwd() + '/lib/barista.js');

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
    });
  });

  describe('config', function() {

    // The config method takes an app object as input and extends Barista.Model
    // and Barista.Collection using the models and collections defined on the 
    // app object.

    it('creates a Barista.TaskModel object', function() {
      //
    });
  });
});