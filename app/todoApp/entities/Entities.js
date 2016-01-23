define([
  'marionette',
  '../app',
  './Todo',
  './TodoCollection',
  '../main'
], function(Marionette, App, Todo, TodoCollection, TodoApp) {

    'use strict';

    App.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){
    
    var todos;

    Entities.Todo = new Todo();

    var initializeTodos = function(){ 
      todos = new TodoCollection();
      todos.fetch();
    };

    var API = {
      getTodoEntities: function(){
        if(todos === undefined){ initializeTodos();
      }
      return todos; }
      };

      App.reqres.setHandler("todos:entities", function(){ return API.getTodoEntities();
      });
  })
});