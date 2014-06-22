Application.Router.Default = Backbone.Router.extend({
    routes: {
        "": "index"
    },


    index: function() {
        var block = new Application.View.Block();
    }
});
