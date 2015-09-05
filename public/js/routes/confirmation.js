App.ConfirmationRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({

        });
    },

    setupController: function(controller, model) {
        // the model backing the controller is users
        // this._super(controller, model);
    },
});
