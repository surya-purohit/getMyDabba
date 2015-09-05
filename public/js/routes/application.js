App.ApplicationRoute = Ember.Route.extend({
	model: function(){
		return Ember.RSVP.hash({

	});
	},

	setupController: function(controller, model){
		// the model backing the controller is users
		this._super(controller, model);
	},
	actions:{
		 openOverlay: function(options) {
            /*@modalName :- name of modal to be rendered
             parnent :- parent view eg: application
             outlet :- in which outlent you wan to render the modalName*/
            return this.render(options.modalName, {
                into: options.parent,
                outlet: options.outlet
            });
        },
        closeModal: function(options) {
            /*outlet :- to be close
             parentView :- parent of that outlet*/
            return this.disconnectOutlet(options);
        },
	}

});