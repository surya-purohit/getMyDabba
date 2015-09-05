App.MenuAddController = Ember.ArrayController.extend({
	menuType: ["Breakfast", "Lunch", "Dinner"],
    actions: {
    	cancelAddMenu:function(){
    		 this.transitionToRoute('index');
    	}
    }
});

