<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Location;

class LocationController extends Controller
{
    function CreateLocation(Request $request)
    {
        try {
            $location = $request->only(['latitude', 'longitude']);
    
            $newLocation = new Location();
            $newLocation->latitude = $location['latitude'];
            $newLocation->longitude = $location['longitude'];
            $newLocation->save();
    
            return response()->json(['status' => 'success', 'message' => 'Location created successfully'], 201); // HTTP 201 Created
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => 'Failed to create location', 'error_message' => $e->getMessage()], 500); // HTTP 500 Internal Server Error
        }
    }
    function ShowLocations(Request $request)
    {
            $location = $request->only(['latitude', 'longitude']);
            $Locations = Location::all();
            return view('showLocations', compact('Locations'));
    }
}  