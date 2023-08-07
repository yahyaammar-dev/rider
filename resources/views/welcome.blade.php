<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>Rider</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="{{ asset('css/index.css') }}">

    </head>
    <body class="antialiased">
        <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
         
            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div id="map"></div>
            </div>
             
         
        </div>
    </body>

    <footer>

                <!-- Getting Location and Setting Location -->

                <script src="{{ asset('js/map.js') }}"></script>
                <script src="{{ asset('js/getLocation.js') }}"></script>
                <!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script> -->
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9dD1heTDnHpT9d4csDIwmyI2vzPzV1kw&callback=initMap" async defer></script>
  
    </footer>

</html>
