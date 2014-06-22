Application.View.Block = Backbone.View.extend({
    el: '.block',


    events: {
        'mouseover': 'onClick'
    },


    initialize: function() {
        console.log('block init', this);
        $('.block').mouseover(function() {
            $(this).addClass('block-active');
        });
    },


    onClick: function() {
        console.log('onClick');
        //this.$el.addClass('block-active');
    }
});