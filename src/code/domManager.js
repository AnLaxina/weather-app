import WeatherManager from "./weatherManager.js";
import DateManager from "./dateManager.js";

export default class DOMManager {
    static async initialize() {
        await this.#changeWeatherIcon();
        await this.#changeCondition();
        await this.#changeLocation();
        this.#changeWind();
        this.#changeHumidity();
        this.#changeTime();
        this.#changeWeekForecastIcons();
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

    static #changeWind() {
        const wind = document.getElementById("wind");
        wind.textContent = WeatherManager.getCurrentConditions().wind.speed;
    }

    static #changeHumidity() {
        const humidity = document.getElementById("humidity");
        humidity.textContent = WeatherManager.getCurrentConditions().humidity;
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

    static #changeWeekForecastIcons() {
        const weekForecast = WeatherManager.getWeekForecast();
        console.log(weekForecast);
        // Get each weather card based on their id
        for(let i = 1; i <= 7; i++) {
            const weatherCard = document.querySelector(`div[data-weather-index="${i}"]`);
            const img = weatherCard.querySelector("img");
            const currentIcon = weekForecast[i][2];
            console.log(i);
            img.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${currentIcon}.png`;
        }
    }
}