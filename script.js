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

    ForecastData(response.data.city);
    
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

    function DailyDate(timestamp) {
        let date = new Date (timestamp * 1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        return days [date.getDay];
    }

    function ForecastData(city) {
        let apiKey = "aod048etf33b73a958b75839ca060b4e";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios(apiKey).get(Forecast);
    }

    function Forecast (response){
    let weatherCast = document.querySelector("#weather-foretell");
     
        
     
     let weatherCasting = "";
     response.data.daily.forEach( function (day, index) {
       if (index < 5) {
    weatherCasting =
      weatherCasting +
      ` 
            <div class="Outlook">
                <div class="weather-foretell-1stDay">
                   ${DailyDate(day.time)}
                </div>
                <div>
                  <img  class="weatherForetell-icon" src="${
                    day.condition.icon_url
                  }" />
                </div>
              <div class="forecast-temperature">
                 <div class="temperature-max"> <strong>${Math.round(
                   day.temperature.maximum
                 )}°C</strong>
                 </div>
                 <div class="temperature-min">${Math.round(
                   day.temperature.minimum
                 )}°C</div>
              </div>
            </div>`;
                 }         
     });
     weatherCast.innerHTML = weatherCasting;    
    }
    let formSearchElement = document.querySelector("#form-search");
formSearchElement.addEventListener("submit", WeatherSearch);

cityResult("Canada");
