define([
  'marionette',
  './TodoItemView'
], function(Marionette, TodoItemView) {

  'use strict';

  var RemainingTasksView = Marionette.CollectionView.extend({
    tagName: 'ul',
    className: function () {
      return 'js-todo-collection-view';
    },
    
    childView: TodoItemView

  });

  return RemainingTasksView;
});