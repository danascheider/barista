var _        = require('underscore');
var Backbone = require('backbone');

var Barista = {
  Model      : require('./model.js'),
  Collection : require('./collection.js'),


  // The `config` method takes your `app` object as an argument and uses it to configure
  // the fixtures.
  // 
  // The `config` method identifies models by searching within the `app` object for keys
  // containing the string 'model' or 'Model'. Likewise, it identifies collections by 
  // searching within the `app` object for keys containing the string 'collection' or 
  // 'Collection'. It then extends its own model and collection classes with the
  // properties of the Backbone model.

  config     : function(app) {
    var keys = _.keys(app),
        that = this;


    _.each(keys, function(key) {
      if(key.match(/[Mm]odel/)) {
        that[key] = that.Model.extend(app[key]);
      } else if (key.match(/[Cc]ollection/)) {
        that[key] = that.Collection.extend(app[key]);
      }
    });
  }
};

Barista.Model.extend = Barista.Collection.extend = Backbone.Model.extend;
module.exports = Barista;