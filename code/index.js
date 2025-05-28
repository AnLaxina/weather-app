import WeatherManager from "./weatherManager.js";
import DOMManager from "./domManager.js";

await WeatherManager.initialize("Maple Ridge, BC");
await DOMManager.initialize();

WeatherManager.logWeatherData();
console.log(`The weather icon is ${WeatherManager.getCurrentConditions().icon}`)