/*
 *
 */

Planck.Animation.EaseOut = Planck.Animation.extend({

    calculateMovement: function(self) {
        var updatedVal = self.currentVal + ((self.end - self.currentVal) / self.speed);
        self.updateElement(self, updatedVal);
    }

});
