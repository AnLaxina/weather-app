import WeatherManager from "./weatherManager.js";
import DOMManager from "./domManager.js";
import DateManager from "./dateManager.js";

await WeatherManager.initialize("Maple Ridge, BC");
await DOMManager.initialize();

WeatherManager.logWeatherData();
WeatherManager.printInformation(WeatherManager.getCurrentConditions());
console.log(`Today's date is ${DateManager.getDateToday()}`);
console.log(`And the day today is: ${DateManager.getDayOfWeek()}`);
console.log(`The current time is: ${DateManager.getCurrentTime()}`);