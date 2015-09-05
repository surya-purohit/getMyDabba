App.VendorController = Ember.ArrayController.extend({
    needs: ["application"],
    actions: {
        login: function() {
            var app = this.get("controllers.application");
            var u = this.get("username");
            var p = this.get("password");
            // if user and pass input exist
            if (u && u.length > 1 && p && p.length > 1) {
                var that = this;
                var opt = {
                    "venName": u,
                    "password": p
                }
                this.store.find("vendor", opt).then(function(data) {
                    data.forEach(function(data1) {
                        if (data1) {
                            that.set("errorMessage", "");
                            app.set("logged", false);
                            app.set("vendorId", data1.get("venId"));
                            that.transitionToRoute('menus');
                        } else {
                            that.set("errorMessage", "The username or password is incorrect.");
                        }
                    })
                }, function(err) {
                    console.log(err);
                    that.set("errorMessage", "The username or password is incorrect.");
                })
            } else {
                this.set("errorMessage", "The username and password are required.");
            }

        },
        forceLogin: function() {
            //console.log(e);
            // we don't do anything here because the event bubbles up to
            // the view and it sends the keypress event
            // (if it is 'enter' key number 13) to the jquery listener setup in view
            // otherwise we would have to setup listeners in all views including input fields
        }
    }
});
