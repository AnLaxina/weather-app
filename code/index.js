import WeatherManager from "./weatherManager.js";
await WeatherManager.initialize("Maple Ridge, BC");
WeatherManager.logWeatherData();
WeatherManager.printInformation(WeatherManager.getCurrentConditions());