App.ProductsIndexRoute = Ember.Route.extend({
	model: function(){
		return Ember.RSVP.hash({
			breakfast: this.store.find("product", {"menuType": "Breakfast"}),
			lunch: this.store.find("product", {"menuType": "Lunch"})
		});
	},
	setupController: function(controller, model){
		var currTime = new Date().getHours();
		if(currTime < 8) {
			controller.set("breakFastTime", true);
			controller.set("lunchTime", true);
			controller.set("dinnerTime", true);
		} else if (currTime > 8 && currTime < 14){
			controller.set("breakFastTime", false);
			controller.set("lunchTime", true);
			controller.set("dinnerTime", true);
		} else if (currTime < 21 && currTime > 14) {
			controller.set("breakFastTime", false);
			controller.set("lunchTime", false);
			controller.set("dinnerTime", true);
		} else {
			controller.set("breakFastTime", false);
			controller.set("lunchTime", false);
			controller.set("dinnerTime", false);
		}
		console.log(model.breakfast, model.lunch);
		controller.set("products", model.breakfast);
		controller.set("lunch", model.lunch);
		this._super(controller, model);
	}
});
// App.ProductsRoute = Ember.Route.extend({
// 	model: function(){
// 		return Ember.RSVP.hash({
// 			breakfast: this.store.find("product", {"menuType": "Breakfast"}),
// 			lunch: this.store.find("product", {"menuType": "Lunch"})
// 		});
// 	},
// 	setupController: function(controller, model){
// 		console.log(model);
// 		controller.set("products", model.breakfast);
// 		controller.set("lunch", model.lunch);
// 		this._super(controller, model);
// 	}
// });