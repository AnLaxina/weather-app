import WeatherManager from "./weatherManager.js";
import DOMManager from "./domManager.js";

DOMManager.initialize();
await WeatherManager.initialize("Maple Ridge, BC");

WeatherManager.logWeatherData();
console.log(`The weather icon is ${WeatherManager.getCurrentConditions().icon}`)