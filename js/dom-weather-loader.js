let formEl = document.querySelector('form');
let details = document.querySelector('.details');

 formEl.addEventListener('submit', (e) => {
     e.preventDefault();
     details.innerHTML = `<h1>Loading...</h1>`;
     let location = e.target.location.value;
     weatherApp(location);
 });

function weatherApp(location){
    fetchAPI(location);
}

// async function fetchAPI(location){
//     let baseURL = "http://api.openweathermap.org/data/2.5/forecast?q" + location;
//     let res = await fetch(baseURL);
//     let data = await res.json();
//     console.log(data);
//     return data;
// }