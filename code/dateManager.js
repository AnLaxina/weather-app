// Since I'm not using a bundler, getting date-fns via CDN will have to do.....
import {format} from "https://cdn.skypack.dev/date-fns";
export default class DateManager {
    static getDateToday() {
        return format(new Date(), "MMMM d, y");
    }

    static getDayOfWeek() {
        return format(new Date(), "EEEE");
    }

    static getCurrentTime() {
        return format(new Date(), "h:mm a");
    }
}