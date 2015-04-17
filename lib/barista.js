var _ = require('underscore');

var Barista = {
  Model      : require('./model.js'),
  Collection : require('./collection.js'),

  config     : function(app) {
    this.TaskModel = app.TaskModel;
  }
};

module.exports = Barista;