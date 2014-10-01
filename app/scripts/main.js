'use strict';
(function(){

    window.App = {};
    App.Views = {};
    App.Models = {};
    App.Collections{};

    // Views

    App.Views.ListView = Backbone.View.extend({
        tagName: 'ul',
        className: 'stuff-todo',
        initialize: function() {
            this.render();
        },
        render: function(stuff) {
            $('body').append(this.el);
            return this;
        },
