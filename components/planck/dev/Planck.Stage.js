/*
 * Superclass all Planck objects are based off
 */

Planck.Stage = function(options) {
    this.objs = [];
    //this.$el = options.$el || null;
    options || (options = {});
    _.extend(this, options);

    this.initialize.apply(this, arguments);
    this._start();
};

_.extend(Planck.Stage.prototype, Planck.Super.prototype, {
    initialize: function() {},

    addObj: function(obj) {
        obj.addToStage(this);
        this.objs.push(obj);
    },

    _start: function() {
        this._queueNextFrame();
    },

    _queueNextFrame: function() {
        var self = this;
        //setTimeout(function() {
            requestAnimationFrame(function() {
                self._onFrame();
            });
        //}, Math.floor(1000/60));
    },

    _onFrame: function() {
        var self = this;

        self.trigger('frame');

        this._queueNextFrame();
    }
});
