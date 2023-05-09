import "./style.css";
import { UI } from "./UI.js";

let currentData = {};

async function getWeather(placename) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=2b309fb13e8445beb4f160830230105&q=${placename}&aqi=no`
    );
    const weatherData = await response.json();
    currentData = weatherData;
    UI.displayConditions(weatherData);
  } catch (error) {
    console.log(error);
    error = "error";
    UI.displayInvalid(error);
  }
}

// window.addEventListener("load", () => {
//   UI.location.textContent = "Welcome!";
// });

export { getWeather, currentData };
