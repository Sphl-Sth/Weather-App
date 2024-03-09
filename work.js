const apiKey = "0bf752c368f61c294df0d8b0c4658063";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".image img");
const cityNameElement = document.querySelector(".name")


async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
var data = await response.json();

console.log(data);


    if(data.cod == "404"){
        cityNameElement.textContent = "Invalid City Name";
        document.querySelector(".temp").textContent = "0°C";
        document.querySelector(".humidity").textContent = "0%";
        document.querySelector(".wind").textContent = "0 km/h";
    
    }
    else
    {
    document.querySelector(".name").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloudy.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rainy.png"
    }
    }



}      


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
