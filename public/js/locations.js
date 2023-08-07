function initMap() {
    var centerCoordinates = { lat: 40.7128, lng: -74.0060 };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: centerCoordinates,
        zoom: 10 
    });

    let customData = data?.map((item) => {
        let position = {
            lat: Number(item.latitude),
            lng: Number(item.longitude)
        };

        var R = 6371;
        var dLat = (userLocation.lat - position.lat) * (Math.PI / 180);
        var dLng = (userLocation.lng - position.lng) * (Math.PI / 180);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(position.lat * (Math.PI / 180)) * Math.cos(userLocation.lat * (Math.PI / 180)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var distance = R * c; 
        distance  = distance.toFixed(2)

        item.customText = `Distance ${distance} km`;
        return item
    });

    var minDistanceObject = customData.reduce((minObj, currentObj) => {
        var minDistance = parseFloat(minObj.customText.split(' ')[1]);
        var currentDistance = parseFloat(currentObj.customText.split(' ')[1]);
    
        return currentDistance < minDistance ? currentObj : minObj;
    }, customData[0]);
    
    var minDistancePosition = {
        lat: Number(minDistanceObject.latitude),
        lng: Number(minDistanceObject.longitude)
    };
    
    let minimumDistance  = parseFloat(minDistanceObject.customText.split(' ')[1])
    let ele  = document.getElementById('minDistance')
    ele.innerHTML = minimumDistance


    customData?.map((item) => {
        let position = {
            lat: Number(item.latitude),
            lng: Number(item.longitude)
        };
    
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: position.lat === minDistancePosition.lat && position.lng === minDistancePosition.lng
                ? 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png' // Blue marker icon
                : undefined // Default marker icon
        });
    
        var infowindow = new google.maps.InfoWindow({
            content: item.customText
        });
    
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });
}

initMap();
