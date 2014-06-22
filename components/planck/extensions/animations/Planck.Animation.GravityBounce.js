/*
 *
 */

Planck.Animation.GravityBounce = Planck.Animation.extend({

    initialize: function() {
        var self = this;

        this.rightBoundary = $(window).width()-this.obj.$el.width();
        this.bottomBoundary = $(window).height()-this.obj.$el.width();
        this.leftBoundary = 0;
        this.topBoundary = 0;

        self.obj.on('bounce', function() {
            self.bounce();
        });
    },

    calculateMovement: function() {
        var self = this;
        self.velocity *= self.friction;

        if(self.property == 'y') {
            self.velocity += self.gravity;

            if((self.currentVal + self.velocity) > self.bottomBoundary || (self.currentVal + self.velocity) < self.topBoundary) {
                self.velocity *= -1;
                self.obj.trigger('bounce');
            }
        } else if(self.property == 'x') {
            if((self.currentVal + self.velocity) > self.rightBoundary || (self.currentVal + self.velocity) < self.leftBoundary) {
                self.velocity *= -1;
                self.obj.trigger('bounce');
            }
        }

        var updatedVal = self.currentVal + self.velocity;

        self.updateElement(self, updatedVal);
    },

    bounce: function() {
        this.velocity *= 0.8;
    }

});