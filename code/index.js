import WeatherManager from "./weatherManager.js";
import DOMManager from "./domManager.js";
import DateManager from "./dateManager.js";

await WeatherManager.initialize("Maple Ridge, BC");
await DOMManager.initialize();

WeatherManager.logWeatherData();
WeatherManager.printInformation(WeatherManager.getCurrentConditions());

// For testing the popup
const popup = document.querySelector("dialog");
popup.showModal();