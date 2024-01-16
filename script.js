
function WeatherSearch(event) {
    event.preventDefault();
    let searchResult = document.querySelector("#serch-input")
     let cityResult = document.querySelector("#weather-city")
    cityResult.innerHTML = searchResult.ariaValueMax;

    }let formSearchElement = document.querySelector("form-search");
formSearchElement.addEventListener("submit",WeatherSe