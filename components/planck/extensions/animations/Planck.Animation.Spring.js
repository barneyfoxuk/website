/*
 *
 */


Planck.Animation.Spring = Planck.Animation.extend({

    initialize: function() {
        this.velocity = 0;
    },

    calculateMovement: function(self) {
        var a = (self.end - self.currentVal) * self.spring;
        self.velocity += a;
        self.velocity *= self.inertia;
        var updatedVal = self.currentVal + self.velocity;

        self.updateElement(self, updatedVal);
    }

});
