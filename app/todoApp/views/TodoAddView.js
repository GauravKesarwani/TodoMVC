define([
  'marionette',
  '../entities/TodoCollection',
  '../entities/Todo'
], function(Marionette, TodoCollection, TodoModel) {

  'use strict';

  var TodoAddView = Marionette.ItemView.extend({
    className: 'todo-addItem-form',

    template: '#template-todoAddItemView',

    keys: {
      ENTER: 13
    },

    ui : {
      'form': '.js-todo__add-form',
      'addButton': '.js-todo__add-button',
      'textInput': '.js-todo__text-input'
    },

    events: {
     'click @ui.addButton': 'onClickAdd',
     'submit @ui.form': 'onFormSubmit',
     'keydown @ui.textInput': 'onInputTextKeyDown'
    },

    initialize: function(options) { 
      this.model = options.model;
      this.collection = options.collection;
    },

    onClickAdd: function() {
      this.ui.form.submit();
    },

    onFormSubmit: function() {
      //Todo: refactor this code to retrieve entities via a request response mechanism using radio.js
      this.model = new TodoModel();
      this.setModelValue(this.model);
      this.collection.add(this.model);
      this.model.save();
    },

    setModelValue: function(model) {
      this.model.set({ 
        'title': this.ui.textInput.val(),
        'status': 'active'
       });
    },

    onInputTextKeyDown: function(e) {
      if (e.keyCode === this.keys.ENTER) {
        this.onClickAdd();
      }
    }
  });

  return TodoAddView;
});
