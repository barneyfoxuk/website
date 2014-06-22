/*
 *
 */


Planck.Animation.Attraction = Planck.Animation.extend({

    calculateMovement: function(self) {
        var temp = (self.end - self.currentVal) * self.elasticity;
        self.velocity += temp;
        self.velocity *= self.inertia;
        var updatedVal = self.currentVal += self.velocity;

        self.updateElement(self, updatedVal);
    }

});
