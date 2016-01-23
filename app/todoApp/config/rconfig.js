requirejs.config({
    baseUrl: "./",
    paths: {
        jquery: "assets/bower_components/jquery/dist/jquery",
        json2: "assets/bower_components/json2/json2",
        underscore: "assets/bower_components/underscore/underscore",
        backbone: "assets/bower_components/backbone/backbone",
        marionette: "assets/bower_components/marionette/lib/backbone.marionette",
        localstorage: "assets/bower_components/backbone.localstorage/backbone.localstorage",
        require: "assets/bower_components/requirejs/require",
        radio: "assets/bower_components/radiojs/radio",
        app: 'app'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        
        backbone:{
            deps: [
                "jquery",
                "underscore",
                "json2"],

            exports: "backbone"
        },

        marionette: {
            deps: ["backbone"],
            exports: "marionette"
        },
        localstorage: {
            deps: ["backbone"]
        }
    }
});

require([
  'backbone',  
  'marionette',  
  'app',
], function(Backbone, Marionette, App) {
  'use strict'

   App.start();

});