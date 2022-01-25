
function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a13e25196a911e59651277aaf1676ff0&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = data.weather[0].main;
            city.innerText = data.name;

        }); 
    //fetch: JS가 url 부르는 promise
    //json: url안의 코드
}

function onGeoError() {
    alert("Can't find your location and thus weather.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
