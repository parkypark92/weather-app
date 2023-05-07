import getWeather from ".";

const UI = {
  locationInput: document.querySelector("#location-input"),
  submitLocation: document.querySelector("#submit"),
  location: document.querySelector("#location"),
  condition: document.querySelector("#condition"),
  celsius: document.querySelector("#celsius"),
  fahrenheit: document.querySelector("#fahrenheit"),
  wind: document.querySelector("#wind"),
  displayConditions: function (data) {
    this.location.textContent = `Here's the forecast for ${data.location.name}, ${data.location.region}`;
    this.condition.textContent = data.current.condition.text;
    this.celsius.textContent = data.current.temp_c;
    this.fahrenheit.textContent = data.current.temp_f;
    this.wind.textContent = data.current.gust_kph;
  },

  displayInvalid: function () {
    this.location.textContent = `Enter a valid location!`;
    this.condition.textContent = "";
    this.celsius.textContent = "";
    this.fahrenheit.textContent = "";
    this.wind.textContent = "";
  },
};

UI.submitLocation.addEventListener("click", () => {
  getWeather(UI.locationInput.value);
});

export { UI };
