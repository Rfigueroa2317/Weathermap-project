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


// function generateHTML(data){
//     let html = `
// <div id="five-day-forecast" className="container container-forecast col-lg-12">${data.current.temperature}</div>
//    <div id="day-one" className="container day-one col-sm-2.2 col-md-2.4 col-lg-2.4">${data.current.weather_descriptions.map(item => item).join('')}</div>
//     <p>day one</p>
//     <p>temperature- ${data.current.temperature}</p>
//     <p>weather icon</p>
//     <p>description</p>
//     <p>humidity- ${data.current.humidy}</p>
//     <p>pressure</p>
//     </div>
//     `
//     details.innerHTML = html;
// }
