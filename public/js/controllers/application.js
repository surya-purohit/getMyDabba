App.ApplicationController = Ember.ArrayController.extend({
	logged:false,
    actions: {
    	
    }
});

// helper is used to iterate over object and setting class with each key.
Handlebars.registerHelper("eachProperty", function(obj, opts) {
    var buffer = "",
        key;
    colorClasses = ["black", "red", "green", "purple", "blue"];
    i = 0;
    console.log(opts);
    for (key in opts.contexts[0]) {
        i %= 5;
        buffer += opts.fn({
            key: key,
            value: opts.contexts[0][key],
            colorValue: colorClasses[i++]
        });
    }
    return buffer;
});
