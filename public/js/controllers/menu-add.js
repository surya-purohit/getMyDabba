App.MenusAddController = Ember.ArrayController.extend({
	menuType: ["Breakfast", "Lunch", "Dinner"],
    actions: {
    	cancelAddMenu:function(){
    		 this.transitionToRoute('menus');
    	},
    	addMenu: function() {
    		var that = this;
    		var app = this.get("controllers.application");
            if(!$("#breads").val()) {
                this.set("error","Breads cann't be blank");
            } else if(!$("#price").val()) {
                this.set("error","Price cann't be blank");
            } else if(!$("#order").val()) {
                this.set("error","Max. Orders cann't be blank");
            } else {
                console.log('confirm order');
                var menu = this.store.createRecord("menu", {
                    venId: app.get("vendorId"),
                    menuType: $("#menu_select").val(),
                    maxOrder: $("#order").val(),
                    price: $("#price").val(),
                    foodItem: {
                    	"Veg": $("#veg").val(),
                    	"Breads": $("#breads").val(),
                    	"Rice": $("#rice").val(),
                    	"Curd": $("#curd").val(),
                    	"Salad": $("#salad").val(),
                    	"Dessert": $("#dessert").val()
                    },
                    date: new Date()
                });
                menu.save().then(function () {
                    console.log('saved');
                    that.transitionToRoute("application");
                }, function (err) {
                    order.deleteRecord();
                    alert("Failed to save order, " + err);
                });
            }
    	}
    }
});

