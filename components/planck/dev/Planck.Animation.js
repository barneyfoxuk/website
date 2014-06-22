/*
 *
 */

Planck.Animation = function(options) {
    //this.initialize.apply(this, arguments);
    options || (options = {});
    _.extend(this, options);

    this.initialize();
    this._initialize();
};

_.extend(Planck.Animation.prototype, Planck.Events, {

    _initialize: function() {
        var self = this;
        self.currentVal = parseInt(self.obj.$el.css(self.property), 10);
    },

    initialize: function() {},

    calculateMovement: function() {
        self.updateElement(self, self.end);
    },

    animate: function() {
        var self = this;

        if(!self.currentVal)
            self.currentVal = parseInt(self.obj.$el.css(self.property), 10);

        self.calculateMovement(self);
    },

    updateElement: function(self, updatedVal) {
        self.obj.$el.css(self.property, updatedVal);
        self.currentVal = updatedVal;

        if(self.currentVal == self.end) {
            self.trigger('animation:complete', self);
        }
    },

    update: function(options) {
        _.extend(this, options);
    }
});

Planck.Animation.extend = Planck.Utils.Extend;