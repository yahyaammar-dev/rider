var userLocation = {}; // Declare the variable outside the function

navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    userLocation = {
        lat: latitude,
        lng: longitude
    };

    // Now you can use userLocation here or any other part of your code
    console.log(userLocation);
});

// You can also use userLocation here, but keep in mind that it might be empty initially until the geolocation function is resolved
console.log(userLocation);
