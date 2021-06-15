// let formEl = document.querySelector('form');
// let details = document.querySelector('.details');
//
//  formEl.addEventListener('submit', (e) => {
//      e.preventDefault();
//      details.innerHTML = `<h1>Loading...</h1>`;
//      let location = e.target.location.value;
//      weatherApp(location);
//  });
//
// function weatherApp(location){
//     fetchAPI(location);
// }
// console.log(formEl);
// console.log(details);

// async function fetchAPI(location){
//     let baseURL = "http://api.openweathermap.org/data/2.5/forecast?q" + location;
//     let res = await fetch(baseURL);
//     let data = await res.json();
//     console.log(data);
//     return data;
// }


//
// document.getElementById("day-one").innerHTML
// console.log(document.getElementById("day-one"))

function addDataToPage(weatherArray){
    weatherArray.forEach(function (obj){
        $("#forecast-title-container").append(appendWeatherData(obj))
    })
}

function appendWeatherData(weatherData) {
   let forecastContainer = $(` <div id="five-day-forecast" class="container container-forecast">
                </div>`)

    forecastContainer.append(`<div id="day-two" class="container day-two">
                       <p></p>
                        <p>temperature: ${weatherData.temp}</p>
                        <p>description: ${weatherData.description}</p>
                        <p>humidity: ${weatherData.humidity}</p>
                        <p>pressure: ${weatherData.pressure}</p>
                        <p>clouds: ${weatherData.temp}</p>
                        <img class="icon0" src="images/${weatherData.icon}.png">
                    </div>`)
    return forecastContainer
}

// >