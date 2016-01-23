define([
  'marionette',
  'app',
  '../views/TodoAddView',
  '../views/TodoCollectionView',
  '../views/TodoFiltersView',
  '../entities/Todo',
  '../entities/TodoCollection',
  '../entities/Entities'
], function(
  Marionette,
  App,
  TodoAddView,
  TodoCollectionView,
  TodoFilterView,
  TodoModel,
  TodoCollection,
  Entities
) {

  'use strict';
 
  var TodoController = Marionette.Controller.extend({

    initialize: function(options) {
      _.bindAll(this, 'onTodoCompleted', 'remainingTasks', 'allTasks', 'completedTasks');
    },

    allTasks: function(options) {

      // Request the todo entities
      var allTasks = App.request('todos:entities');

      // Create and show the todo add view
      this.todoAddView = new TodoAddView({
        collection: allTasks
      });
      App.regions.addTodoRegion.show(this.todoAddView);

      // Create and show the todo list view
      this.todoCollectionView = new TodoCollectionView({
        collection: allTasks,
        collectionEvents: {
          'reset': 'render'
        }
      });
      App.regions.listTodoRegion.show(this.todoCollectionView);

      //Create and show the todo filter view
      this.todoFilterView = new TodoFilterView({});
      App.regions.filterTodoRegion.show(this.todoFilterView);
      
    },

    completedTasks: function() {
      var allTasks = App.request('todos:entities');

      // Create and show the todo add view
      this.todoAddView = new TodoAddView({
        collection: allTasks
      });
      App.regions.addTodoRegion.show(this.todoAddView);

      var completedTasks = new TodoCollection(allTasks.where({ 'status': 'complete'}));
      this.todoCollectionView = new TodoCollectionView({
        collection: completedTasks,
        collectionEvents: {
          'reset': 'render'
        }
      });
      App.regions.listTodoRegion.show(this.todoCollectionView);

      //Create and show the todo filter view
      this.todoFilterView = new TodoFilterView({});
      App.regions.filterTodoRegion.show(this.todoFilterView);
    },

    remainingTasks: function() {
      var allTasks = App.request('todos:entities');

      // Create and show the todo add view
      this.todoAddView = new TodoAddView({
        collection: allTasks
      });
      App.regions.addTodoRegion.show(this.todoAddView);
      
      var remainingTasks = new TodoCollection(allTasks.where({ 'status': 'active'}));
      this.remainingTasksView = new TodoCollectionView({
        collection: remainingTasks,
        collectionEvents: {
          'reset': 'render'
        }
      });

      this.remainingTasksView.on('childview:todo:completed', this.onTodoCompleted);
      App.regions.listTodoRegion.show(this.remainingTasksView);
      
      //Create and show the todo filter view
      this.todoFilterView = new TodoFilterView({});
      App.regions.filterTodoRegion.show(this.todoFilterView);
    },

    onTodoCompleted: function() {
      this.remainingTasks();
    }
  });
  return TodoController;
});