import APIManager from "./apiManager.js";

export default class WeatherManager {
    // API Key: NJ5X7VJZ62AWQLWL5WCRJK7GV
    static initialize() {
        // For now, let's just test out the API and see if everything is working.
        console.log("Hello! I'm in the weather manager class");
    }

    static async displayWeatherData(location) {
        const weatherData = await APIManager.getWeatherInformation(location);
        console.log(weatherData);
    }
}