define([
  'backbone',
  'localstorage'
], function(Backbone, LocalStorage) {

  'use strict';

  var TodoModel = Backbone.Model.extend({

    defaults: {
      'title': 'default title',
      'status': '',
      'disabled': '',
      'checked': ''
    }

  });

  return TodoModel;
});
