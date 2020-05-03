const api_key = '4d599bfc9deea4593d8088583cdf932f';
const coord_LS = 'coord';
const locationContainer = document.querySelector('.location');
const weatherContainer = document.querySelector('.weather');
const tempContainer = document.querySelector('.temperature');


function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json){
        const location = json.name;
        const weather = json.weather[0].description;
        const temp = json.main.temp;
         
        locationContainer.innerText = `${location}`;
        weatherContainer.innerText = `${weather}`;
        tempContainer.innerText = `${temp}℃`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(coord_LS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('error');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(coord_LS);

    if(loadedCords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();
