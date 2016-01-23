define([
  'marionette',
], function(Marionette) {

  'use strict';

  var TodoFiltersView = Marionette.ItemView.extend({
    className: 'todo-filterItem-form',

    template: '#template-todoFilterItem',

    ui: {
      'todoAll': '.js-todo-filter__all',
      'todoRemaining': '.js-todo-filter__remaining',
      'todoCompleted': '.js-todo-filter__completed'
    }
    
  });

  return TodoFiltersView;

});