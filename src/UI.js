import getWeather from ".";
import sun from "./icons/113.png";
import sunnyCloud from "./icons/116.png";
import cloud from "./icons/119.png";
import rain from "./icons/266.png";
import sunnyRain from "./icons/293.png";

const UI = {
  locationInput: document.querySelector("#location-input"),
  submitLocation: document.querySelector("#submit"),
  location: document.querySelector("#location"),
  condition: document.querySelector("#condition"),
  conditionIcon: document.querySelector("#icon"),
  celsius: document.querySelector("#celsius"),
  fahrenheit: document.querySelector("#fahrenheit"),
  rain: document.querySelector("#rain"),
  wind: document.querySelector("#wind"),
  icons: document.querySelector(".icons-contain"),
  sunIcon: document.querySelector("#sun-icon"),
  sunCloudIcon: document.querySelector("#sun-cloud-icon"),
  cloudIcon: document.querySelector("#cloud-icon"),
  rainIcon: document.querySelector("#rain-icon"),
  sunRainIcon: document.querySelector("#sun-rain-icon"),
  displayConditions: function (data) {
    this.location.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
    this.icons.classList.add("hide");
    this.conditionIcon.src = data.current.condition.icon;
    this.condition.textContent = `${data.current.condition.text}`;
    this.celsius.textContent = `Temp (C): ${data.current.temp_c}`;
    this.fahrenheit.textContent = `Temp (F): ${data.current.temp_f}`;
    this.rain.textContent = `Precipitation: ${data.current.precip_mm}mm`;
    this.wind.textContent = `Wind: ${data.current.gust_kph}km/h`;
  },
  displayInvalid: function () {
    this.location.textContent = `Enter a valid location!`;
    this.icons.classList.remove("hide");
    this.condition.textContent = "";
    this.conditionIcon.src = "";
    this.celsius.textContent = "";
    this.fahrenheit.textContent = "";
    this.rain.textContent = "";
    this.wind.textContent = "";
  },
};

UI.submitLocation.addEventListener("click", () => {
  getWeather(UI.locationInput.value);
});

UI.sunIcon.src = sun;
UI.sunCloudIcon.src = sunnyCloud;
UI.cloudIcon.src = cloud;
UI.rainIcon.src = rain;
UI.sunRainIcon.src = sunnyRain;

export { UI };
