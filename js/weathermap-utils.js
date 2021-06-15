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
            addDataToPage(pullingData(data));
        }
    })
}
getAjaxRequest(29.4241,-98.4936);
// .2 on success, massage the data to your liking, bundle it up as an object, and pass along to dom-weather-loader.js

function pullingData(data){
    var weatherData = [];
    for(let i=0; i<data.list.length;i++){
        if(i % 8 === 0){
            weatherData.push({
                temp: data.list[i].main.temp,
                humidity: data.list[i].main.humidity,
                pressure: data.list[i].main.pressure,
                wind: data.list[i].main.wind,
                clouds: data.list[i].main.clouds,
                visibility: data.list[i].main.visibility,
                description: data.list[i].main.description,
                icon: data.list[i].weather[0].icon,
            })
        }
    }
    return weatherData;
}