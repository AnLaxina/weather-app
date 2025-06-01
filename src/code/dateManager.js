import {format} from "date-fns";
export default class DateManager {
    static getDateToday() {
        return format(new Date(), "MMMM d, y");
    }

    static getDayOfWeek(date = new Date()) {
        return format(date, "EEEE");
    }

    static getCurrentTime() {
        return format(new Date(), "h:mm a");
    }

    static updateTime() {
        const time = document.getElementById("time");
        time.textContent = DateManager.getCurrentTime();
    }
}