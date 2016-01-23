define([
  'marionette',
  './app',
  './controllers/TodoController'
], function(
  Marionette,
  App,
  TodoController
) {

  'use strict';

  var Widget = App.module('TodoApp',function(self, App, Backbone, Marionette, $, _) {
    
    self.Router = Marionette.AppRouter.extend({
      appRoutes: {
          'index': 'allTasks',
          'completed': 'completedTasks',
          'remaining': 'remainingTasks'
        }
    });

    self.on('start', function() {
      self.controller = new TodoController();

      new self.Router({
        controller: self.controller
      });
    });

    App.on('todos:list', function() {
      App.navigate('index'); 
      self.controller.allTasks();
    });

  });

  return Widget;
});