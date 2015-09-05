
App.ProductsIndexController = Ember.Controller.extend({
	menuType: ["breakfast", "lunch", "dinner"],
	actions: {
    	buy:function(para){
    		this.transitionToRoute("buynow",{
    			queryParams:{
    				obj: para
    			}
    		});
    	}
    }
});
// App.ProductsController = Ember.Controller.extend({
	
//     actions: {
    	
//     }
// });
