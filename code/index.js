import WeatherManager from "./weatherManager.js";
import DOMManager from "./domManager.js";
import DateManager from "./dateManager.js";

await WeatherManager.initialize("Maple Ridge, BC");
await DOMManager.initialize();

WeatherManager.logWeatherData();
const dateforDay2 = WeatherManager.getWeekForecast()[2][0];
console.log(`The date is: ${dateforDay2} and the day is: ${DateManager.getDayOfWeek(dateforDay2)}`);