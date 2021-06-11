// 1. Create the map, add to #map

mapboxgl.accessToken = MAPBOX_TOKEN;
var mapboxgl;
console.log(mapboxgl);

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4936, 29.4241],
    zoom: 13
})
console.log(map);

function activatingMap() {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    map = '/this is a placeholder for now. will Change later/';

}

// .2 Create the geocoder and add it how you see fit

function settingUpTheGeocode() {
    return new MapboxGeocode({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

// .3 Set the process for creating/updating/removing markers and popups
// marker

let marker = new mapboxgl.Marker()
    .setLngLat([-98.4936, 29.4241])
    .addTo(map);

settingUpTheGeocode(marker)
console.log(marker);

function settingUpMarker(){

}

// popup



// .4 Create the reverseGeocode() function that will get the location data of a set of coordinates

// *** You don't need a reverseGeocode. However, if you feel like you wanna play with it add it after you're done with the functionality *** \\

// .5 Create the callback to be used to pass coordinates along to weathermap-utils.js when the response from geocoder endpoint is SUCCESSFUL
