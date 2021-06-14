// .1 functions accepts a set of coordinates and run ajax requests to the openweathermap endpoints you need

function getAjaxRequest(lat,lon){
    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: lat,
            lon: lon,
            units: "imperial"
        },
        success:function(data){
            console.log('5 day forecast',data);
        }
    })
}
getAjaxRequest(29.4241,-98.4936);
// .2 on success, massage the data to your liking, bundle it up as an object, and pass along to dom-weather-loader.js
