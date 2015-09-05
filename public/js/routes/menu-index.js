App.MenusIndexRoute = Ember.Route.extend({
    needs: ["application"],
    model: function() {
        var opt = {
            "venId": App.__container__.lookup("controller:application").get("vendorId")
        }
        console.log("opt ", opt);
        return Ember.RSVP.hash({
            menus : this.store.find("menu", opt)
        });

    },

    setupController: function(controller, model) {
        console.log(model.menus);
        // the model backing the controller is users
        controller.set("menusAll", model.menus);
        this._super(controller, model.menus);
    },
    actions: {}

});
