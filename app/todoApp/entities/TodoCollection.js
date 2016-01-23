define([
  './Todo',
  'localstorage'
], function(TodoModel, LocalStorage) {

  'use strict';

  var TodoCollection = Backbone.Collection.extend({
    model: TodoModel,

    localStorage: new LocalStorage('todos'),
  });

  return TodoCollection;

});