import WeatherManager from "./weatherManager.js";
import DateManager from "./dateManager.js";

export default class DOMManager {
    static async initialize() {
        await this.#changeWeatherIcon();
        await this.#changeCondition();
        await this.#changeLocation();
        this.#changeTime();
        console.log("The DOM Manager has initialized!");
    }

    static async #changeWeatherIcon() {
        const img = document.getElementById("weather-icon");
        const currentIcon = await WeatherManager.getCurrentConditions().icon;
        img.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${currentIcon}.png`;
    }

    static async #changeCondition() {
        const condition = document.getElementById("condition");
        const temperature = await WeatherManager.getCurrentConditions().feelsLike;
        const description = await WeatherManager.getCurrentConditions().condition;
        condition.textContent = `${temperature}° (${description})`;
    }

    static async #changeLocation() {
        const city = document.getElementById("city");
        const address = await WeatherManager.getLocationInfo().address;
        city.textContent = address;
    }

    static #changeTime() {
        DateManager.updateTime();
        setInterval(() => DateManager.updateTime(), 1000);
    }
}