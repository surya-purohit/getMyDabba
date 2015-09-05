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
    this.route("contact");
});
App.ApplicationAdapter = DS.FixtureAdapter;