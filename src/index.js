import "./style.css";

const locationInput = document.querySelector("#location-input");
const submitLocation = document.querySelector("#submit");
const location = document.querySelector("#location");
const condition = document.querySelector("#condition");
const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const wind = document.querySelector("#wind");

async function getWeather(placename) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=2b309fb13e8445beb4f160830230105&q=${placename}&aqi=no`
    );
    const weatherData = await response.json();
    displayConditions(weatherData);
  } catch {
    displayInvalid();
  }
}

function displayConditions(data) {
  location.textContent = `Here's the forecast for ${data.location.name}, ${data.location.region}`;
  condition.textContent = data.current.condition.text;
  celsius.textContent = data.current.temp_c;
  fahrenheit.textContent = data.current.temp_f;
  wind.textContent = data.current.gust_kph;
}

function displayInvalid() {
  location.textContent = `Enter a valid location!`;
  condition.textContent = "";
  celsius.textContent = "";
  fahrenheit.textContent = "";
  wind.textContent = "";
}

submitLocation.addEventListener("click", () => {
  getWeather(locationInput.value);
});
