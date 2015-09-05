App.MenusIndexController = Ember.ArrayController.extend({
	menusAll:[],
	getData:function(){
		console.log(this.get("model"));
	}
});

