App.ApplicationRoute = Ember.Route.extend({
	model: function(){
		return Ember.RSVP.hash({

	});
	},

	setupController: function(controller, model){
		console.log("chal gya");
		$(document).ajaxStart(function(){
			AJAXING = true;
			$(".spinner").show();
		});

		$(document).ajaxStop(function(){
			AJAXING = false;
			$(".spinner").hide();
		});

		// the model backing the controller is users
		// this._super(controller, model);
	},
	actions:{
		 openOverlay: function(options) {
		 	console.log(options);
            /*@modalName :- name of modal to be rendered
             parnent :- parent view eg: application
             outlet :- in which outlent you wan to render the modalName*/
            return this.render(options, {
                into: "application",
                outlet: "outletVendor"
            });
        },
        closeModal: function(options) {
            /*outlet :- to be close
             parentView :- parent of that outlet*/
            return this.disconnectOutlet(options);
        },
        menuAdd: function(){
        	
        }
	}

});