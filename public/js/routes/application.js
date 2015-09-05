App.ApplicationRoute = Ember.Route.extend({
	model: function(){
		return Ember.RSVP.hash({
			// categories : this.store.find('Category'),
	});
	},

	setupController: function(controller, model){
		// the model backing the controller is users
		// this._super(controller, model.categories);
	}

});