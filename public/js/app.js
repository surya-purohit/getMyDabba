/*
 *  START THE ember application
 */
var App = Ember.Application.create({
    LOG_VERSION: true,
    //LOG_TRANSITIONS_INTERNAL: true,
    //LOG_VIEW_LOOKUPS: true,
    //LOG_BINDINGS:true,
    //LOG_RESOLVER: true,
    ENV: {
        RAISE_ON_DEPRECATION: true
    },
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_ACTIVE_GENERATION: true,
    LOG_TRANSITIONS: true
});
App.Router.map(function() {
    this.resource("index", {
        path: "/"
    });
    this.resource("menus", function(){
        this.route("add");
    });
    this.route("contact");
    this.route("vendor");
    this.resource("products", function(){
        this.resource("product", {path:"/:product_id"});
    })
    this.route("social");
});



App.ApplicationAdapter = DS.FixtureAdapter.extend({

   p: 1,
   mulDeleteShape: [],
   queryFixtures: function(records, query, type) {
       return records.filter(function(record) {
           for (var key in query) {
               if (!query.hasOwnProperty(key)) {
                   continue;
               }
               var value = query[key];
               if (record[key] !== value) {
                   return false;
               }
           }
           return true;
       });
   },
   //creates a record 
   createRecord: function(store, type, record) {
       return this._super(store, type, record);
   },

   deleteRecord: function(store, type, record) {
       return this._super(store, type, record);

   },

   updateRecord: function(store, type, record) {
       return this._super(store, type, record);

   },

   find: function(store, type, id) {
       // console.log("FixtureAdapter.find");

       return this._super(store, type, id);

   },

   findMany: function(store, type, ids) {
       // console.log("FixtureAdapter.findMany");

       return this._super(store, type, ids);

   },

});
