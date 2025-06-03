import { formatInTimeZone } from "date-fns-tz";
import WeatherManager from "./weatherManager.js";

export default class DateManager {
    static getDateToday() {
        const timezone = WeatherManager.getLocationInfo().timezone;
        return formatInTimeZone(new Date(), timezone, "MMMM d, y");
    }

    static getDate(date) {
        const timezone = WeatherManager.getLocationInfo().timezone;
        return formatInTimeZone(date, timezone, "MMMM d, y");
    }

    static getDayOfWeek(date = new Date()) {
        const timezone = WeatherManager.getLocationInfo().timezone;
        return formatInTimeZone(date, timezone, "EEE");
    }

    static getCurrentTime() {
        const timezone = WeatherManager.getLocationInfo().timezone;
        return formatInTimeZone(new Date(), timezone, "h:mm a");
    }

    static updateTime() {
        const time = document.getElementById("time");
        time.textContent = DateManager.getCurrentTime();
    }
}