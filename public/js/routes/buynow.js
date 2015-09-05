App.BuynowRoute = Ember.Route.extend({
	queryParams: {
		obj : {
			refreshModel : true
		}
	},
	model: function(params){
		console.log(params);
		this.set("order",params.obj);
		// return this.store.find("Product", params.id);
	},
	setupController: function(controller, model){
		console.log()
		// this._super(controller, model);
		controller.set('abc',this.get("order"));
	}
});