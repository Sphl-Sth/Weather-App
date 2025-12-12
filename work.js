const apiKey = "07f982910ef683a156e8009b5fbdb344";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".image img");
const cityNameElement = document.querySelector(".name");

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    // Invalid city
    if (data.cod == "404") {
        cityNameElement.textContent = "Invalid City";
        document.querySelector(".temp").textContent = "0°C";
        document.querySelector(".humidity").textContent = "0%";
        document.querySelector(".wind").textContent = "0 km/h";
        weatherIcon.src = "images/cloudy_sunny.png";
        return;
    }

    // Display data
    document.querySelector(".name").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + " km/h";

    // Weather icons
    const weather = data.weather[0].main;

    if (weather === "Clouds") {
        weatherIcon.src = "images/cloudy.png";
    } else if (weather === "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (weather === "Rain") {
        weatherIcon.src = "images/rainy.png";
    } else if (weather === "Snow") {
        weatherIcon.src = "images/snow.png";
    } else if (weather === "Mist" || weather === "Fog") {
        weatherIcon.src = "images/mist.png";
    } else {
        weatherIcon.src = "images/cloudy_sunny.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
