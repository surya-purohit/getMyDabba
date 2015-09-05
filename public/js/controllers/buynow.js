App.BuynowController = Ember.ArrayController.extend({
    quantList :[1,2,3,4,5],
    queryParams:['obj'],
    calPrice: function() {
       console.log("cvcfd");
       console.log(this.get("abc"))
   }.observes("quant"),
    actions: {
        add: function() {
            var that = this;
            if(!this.get("name")) {
                this.set("error","Name cann't be blank");
            } else if(!this.get("address")) {
                this.set("error","Address cann't be blank");
            } else if(!this.get("mobile")) {
                this.set("error","MobileNo. cann't be blank");
            } else {
                console.log('confirm order');
                var order = this.store.createRecord("Confirmation", {
                    name: that.get("name"),
                    address: that.get("address"),
                    mobile: that.get("mobile"),
                    price: "6576"
                });
                order.save().then(function () {
                    console.log('saved');
                    that.transitionToRoute("application");
                }, function (err) {
                    order.deleteRecord();
                    alert("Failed to save order, " + err);
                });
            }
        }
    }
})
