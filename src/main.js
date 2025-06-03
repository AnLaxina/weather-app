import WeatherManager from "./code/weatherManager.js";
import DOMManager from "./code/domManager.js";
import DateManager from "./code/dateManager.js";

// Since I'm using Vite, let's import them that way
import "./css/reset.css";
import "./font/pretendard.css";
import "./css/modal.css";
import "./css/style.css";

await WeatherManager.initialize("Maple Ridge, Canada");
await DOMManager.initialize();

WeatherManager.logWeatherData();
const dateforDay2 = WeatherManager.getWeekForecast()[1][0];
console.log(dateforDay2);
console.log(`The date: ${DateManager.getDate(dateforDay2)} \nAnd the day is: ${DateManager.getDayOfWeek(dateforDay2)}`);