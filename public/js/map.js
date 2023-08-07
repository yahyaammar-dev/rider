function initMap() {
    // Coordinates for the map center
    var centerCoordinates = { lat: 40.7128, lng: -74.0060 };
    
    // Create a new map instance
    var map = new google.maps.Map(document.getElementById('map'), {
        center: centerCoordinates,
        zoom: 10 // Zoom level (1: World, 5: Continent, 10: City, 15: Streets, 20: Buildings)
    });

    // Add a marker at the map center
    var marker = new google.maps.Marker({
        position: centerCoordinates,
        map: map,
        title: 'Map Center'
    });


    map.addListener('click', function(event) {
        var clickedLatLng = event.latLng;
        let latitude = clickedLatLng.lat();
        let longitude = clickedLatLng.lng();
    
        // Send the latitude and longitude to the Laravel route using AJAX
        fetch('/create-location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({
                latitude: latitude,
                longitude: longitude
            })
        })
        .then(response => response.json())
        .then(res => {
            if (res.status === 'success') {
                alert('Location created successfully: ' + res.message);
            } else {
                alert('Failed to create location. Error: ' + res.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
        // Add a marker to the clicked location
        var marker = new google.maps.Marker({
            position: clickedLatLng,
            map: map,
            title: 'Clicked Location'
        });
    });

}

initMap();