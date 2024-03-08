const search = document.querySelector(".search-input");
const search_btn = document.querySelector(".search-icon");
const weather_image = document.querySelector(".weather_image");

const apikey = "cffccf4fcd0b51c865fb330e17c02d73";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather_wrapper").style.display = "none";
  } else {
    const data = await res.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".celcius").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km / hr";

    if (data.weather[0].main == "Clouds") {
      weather_image.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weather_image.src = "images/rain.png";
    } else if (data.weather[0].main == "Clear") {
      weather_image.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weather_image.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weather_image.src = "images/mist.png";
    }
    document.querySelector(".weather_wrapper").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

search_btn.addEventListener("click", () => {
  checkWeather(search.value);
  search.value = "";
});
