define([
  'backbone',
  'marionette'
  ],
  function(Backbone, Marionette) {

    'use strict';
    
    var App = new Marionette.Application();

    App.Router = new Marionette.AppRouter();

    App.navigate = function(route, options){ 
      options || (options = {}); 
      Backbone.history.navigate(route, options);
    };

    App.getCurrentRoute = function() {
      return Backbone.history.fragment
    };

    App.on('before:start', function() {
      var LayoutView = Marionette.LayoutView.extend({
        el: '#region-main',

        regions: {
          addTodoRegion: '#region-todo-add',
          listTodoRegion: '#region-todo-list',
          filterTodoRegion: '#region-todo-filter'
        }

      });

      App.regions = new LayoutView();
    });

    
    App.on('start', function() {
      
      if (Backbone.history) {
          require(['./main'], function() {
            Backbone.history.start();
       
        if (Backbone.history.fragment === "") {
           App.trigger('todos:list');
          }
        });
      }

    });

    return App;
});