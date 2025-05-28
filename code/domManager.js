import WeatherManager from "./weatherManager.js";

export default class DOMManager {
    static async initialize() {
        await this.#changeWeatherIcon();
        console.log("The DOM Manager has initialized!");
    }

    static async #changeWeatherIcon() {
        const img = document.getElementById("weather-icon");
        const currentIcon = await WeatherManager.getCurrentConditions().icon;
        img.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${currentIcon}.png`;
    }
}