// 1. Create the map, add to #map

mapboxgl.accessToken = MAPBOX_TOKEN;
// var mapboxgl;
console.log(mapboxgl);

let geocoder = settingUpTheGeocoder();

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

function gettingTheMap() {
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.4936, 29.4241],
        zoom: 12
    })
}


// .2 Create the geocoder and add it how you see fit

function settingUpTheGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

function addGeocoderEvent(geocoder) {
    geocoder.on("result", function (event) {
        console.log(event);
        marker.setLngLat(event.result.geometry.coordinates)
    })
}
addGeocoderEvent(geocoder);


function addingTheGeocoderToMap(geocoder){
    map.addControl(geocoder);
}
addingTheGeocoderToMap(geocoder);
// .3 Set the process for creating/updating/removing markers and popups
// marker

let marker = new mapboxgl.Marker()
    .setLngLat([-98.4936, 29.4241])
    .addTo(map);

settingUpTheGeocoder(marker)
console.log(marker);

function settingUpMarker() {
    return new marker.setLngLat([-98.4936, 29.4241]).addTo(map)
    // return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

settingUpMarker(marker)

function addingMapEvent(marker) {
    map.on('click', function (event) {
        console.log(event.lngLat)
        marker.setLngLat(event.lngLat).addTo(map);
    })
}

addingMapEvent(marker);

// popup
function setPopup(text){
    let popup = new mapboxgl.Popup().setHTML(`<p>${text}</p>`).addTo(map)

    marker.setPopup(popup)
}


function getPopup(){
    return new mapboxgl.Popup()
}

// .4 Create the reverseGeocode() function that will get the location data of a set of coordinates

// *** You don't need a reverseGeocode. However, if you feel like you wanna play with it add it after you're done with the functionality *** \\

function getReverseGeocode(point, marker){
    $.ajax({
        url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${point}.json?access_token=${mapboxgl.accessToken}`,
        success: function(data){
            marker.setPopup(getPopup(data.features[0].place_name)).togglePopup();
        }
    })
}

// .5 Create the callback to be used to pass coordinates along to weathermap-utils.js when the response from geocoder endpoint is SUCCESSFUL
