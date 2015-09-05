App.GoogleMapComponent = Ember.Component.extend({
    didInsertElement: function() {
        geocoder = new google.maps.Geocoder();
        //Getting address from the application controller.
        var address = "hisar";

        var zoomlevel = 12;

        console.log($('#googleMap').get(0));
        //Setting a new Google map to the div.
        gmap = new google.maps.Map($('#googleMap').get(0), {
            zoom: parseInt(zoomlevel),
            streetViewControl: false,
            scaleControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP //setting the/SATELLITE View
        });

        geocoder.geocode({
            'address': address
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                gmap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: gmap,
                    position: results[0].geometry.location
                });
            } else {
                alert("Failed to get Property address. Kindly recheck your Property address.");
            }
        });

    }


});
