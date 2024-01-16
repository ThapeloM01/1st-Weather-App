function weatherResponse(response) {
    let temperatureNumber = document.querySelector("#temperature-value");
    let temperature = response.data.temperature.current;
    temperatureNumber.innerHTML = Math.round(temperature);
    let cityResult = document.querySelector("#weather-city");
    cityResult.innerHTML = response.data.city;
}

function formResult(city) {
    let apiKey = "aod048etf33b73a958b75839ca060b4e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(cityresponse)
}

function WeatherSearch(event) {
    event.preventDefault();
    let searchResult = document.querySelector("#serch-input")
     let cityResult = document.querySelector("#weather-city")
    cityResult.innerHTML = searchResult.value;
formResult(searchResult.value);
    }let formSearchElement = document.querySelector("form-search");
formSearchElement.addEventListener("submit",WeatherSearch);

formResult(Canada)