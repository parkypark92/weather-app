import "./style.css";
import { UI } from "./UI.js";

export default async function getWeather(placename) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=2b309fb13e8445beb4f160830230105&q=${placename}&aqi=no`
    );
    const weatherData = await response.json();
    UI.displayConditions(weatherData);
  } catch (error) {
    UI.displayInvalid();
  }
}
