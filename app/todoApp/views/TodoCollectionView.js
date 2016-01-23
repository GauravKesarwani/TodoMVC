define([
  'marionette',
  './TodoItemView'
], function(Marionette, TodoItemView) {

  'use strict';

  var TodoCollectionView = Marionette.CollectionView.extend({
    tagName: 'ul',
    className: function () {
      return 'js-todo-collection-view';
    },
    
    childView: TodoItemView
  });

  return TodoCollectionView;
});
