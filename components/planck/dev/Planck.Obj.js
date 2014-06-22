/*
 * Superclass all Planck objects are based off
 */

Planck.Obj = function(options) {
    //this.initialize.apply(this, arguments);
    var self = this;

    this.animatedProperties = [];

    //this.extend = Planck.Utils.Extend;
    //this.$el = null;

    options || (options = {});
    _.extend(this, options);


    this.initialize.apply(this, arguments);
    this._initialize.apply(this, arguments);
};

_.extend(Planck.Obj.prototype, Planck.Super.prototype, {

    _initialize: function() {
        var self = this;

        if(this.$el && this.$el !== null) {
            this.$el.data('planckObj', this);
        }

        if(self.animateProperties) {
            _.each(self.animateProperties, function(n) {
                self.animateProperty(n);
            });
        }
    },

    _onFrame: function() {
        var self = this;

        // for(var propertyKey in self.animatedProperties) {
        //     var animation = self.animatedProperties[propertyKey];
        //     animation.animate();
        // }

        for(var i = 0; i < self.animatedProperties.length; i++) {
            self.animatedProperties[i].animate();
        }

        self.onFrame();
    },

    initialize: function() {},

    onFrame: function() {},

    addToStage: function(stage) {
        var self = this;
        self.stage = stage;
        self.stage.on('frame', function() { self._onFrame(); });
    },

    animateProperty: function(options) {
        var self = this;

        options || (options = {});
        _.extend(options, {
            obj: self
        });

        var existingAnimation = _.where(self.animatedProperties, {property: options.property});

        if(!existingAnimation || existingAnimation.length <= 0) {

            var animation = new options.type(options);

            self.animatedProperties.push(animation);

            animation.on('animation:complete', function(animation) {
                //self.removePropertyAnimation(animation);
            });
        } else {
            existingAnimation[0].update(options);
        }

    },

    removePropertyAnimation: function(animation) {
        console.log('removePropertyAnimation', property);
        var self = this;
        //var existingAnimation = _.where(self.animatedProperties, {property: property});
        var animationIndex = self.animatedProperties.indexOf(animation);
        console.log('animation', animation, animationIndex);
        if(animationIndex >= 0) {
            var splicedAnimation = self.animatedProperties.splice(animationIndex,1);
            console.log('splicedAnimation', splicedAnimation);
            delete(splicedAnimation);
        }
    }
});

Planck.Obj.extend = Planck.Utils.Extend;