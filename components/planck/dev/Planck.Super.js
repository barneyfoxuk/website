/*
 * Superclass all Planck objects are based off
 */

Planck.Super = function(options) {
    //this.initialize.apply(this, arguments);
};

_.extend(Planck.Super.prototype, Planck.Events, {
    get: function(selector) {
        var self = this;
        if(self['get'+selector] && typeof(self['get'+selector]) == typeof(Function)) {
            return call(self['get'+selector]);
        } else if(self[selector]) {
            return self[selector];
        } else {
            console.log('error: no property of that name');
        }
    },

    set: function(selector, value) {
        var self = this;
        if(self['set'+selector] && typeof(self['set'+selector]) == typeof(Function)) {
            self['set'+selector](value);
        } else {
            self[selector] = value;
        }
    }
});
