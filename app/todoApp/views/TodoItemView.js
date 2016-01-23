define([
  'marionette'
], function(Marionette) {

  'use strict';

  return Marionette.ItemView.extend({
    tagName: 'li',
    template: '#template-todoListItem',

    templateHelpers: function() {
      return {
        completed: this.model.get('disabled'),
        checked: this.model.get('checked')
      }
    },

    ui: {
      'todoCheckbox': '.js-todo-completed'
    },

    events: {
      'click @ui.todoCheckbox': 'onTodoClick'
    },

    onTodoClick: function() {
      this.model.set({'status': 'complete' , 'disabled': 'disabled', 'checked': 'checked' })
      this.model.save();
      this.triggerMethod('todo:completed');
    }
  });

});