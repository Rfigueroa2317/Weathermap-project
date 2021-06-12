$.ajax({
    url:"http://api.openweathermap.org/data/2.5/forecast",
    type: "GET",
    data: {
        APPID: OPEN_WEATHERMAP_TOKEN,
        lat: 29.4241,
        lon: -98.4936,
        unit: "Imperial"
    },
    success:function(data){
        console.log(data);
    }

})

