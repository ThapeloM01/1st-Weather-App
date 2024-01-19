function weatherResponse(response) {
    let temperatureNumber = document.querySelector("#temperature-value");
    let temperature = response.data.temperature.current;
    temperatureNumber.innerHTML = Math.round(temperature);
    let cityResult = document.querySelector("#weather-city");
    cityResult.innerHTML = response.data.city;
    let description = document.querySelector("#weather-Description");
    description.innerHTML = response.data.condition.description;
    let humidity = document.querySelector("#HumidityInfo");
    humidity.innerHTML = `${response.data.temperature.humidity}%`;
    let windSpeed = document.querySelector("#speed-wind");
    windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
    let time = document.querySelector("#time-details");
    let date = new Date(response.data.time * 1000);

    time.innerHTML = dateFormat(date);
    let weatherIcon = document.querySelector("#icon")
    weatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
    
}
function dateFormat(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",
];
let day = days[date.getDay()];

if (minutes < 10){
    minutes = `0${minutes}`;
}
 
return `${day} ${hours}:${minutes}`;
}

function cityResult(city) {
    let apiKey = "aod048etf33b73a958b75839ca060b4e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherResponse);
}



function WeatherSearch(event) {
    event.preventDefault();
    let searchResult = document.querySelector("#search-input");
cityResult(searchResult.value);
    }
    let formSearchElement = document.querySelector("#form-search");
formSearchElement.addEventListener("submit", WeatherSearch);

cityResult("Canada");