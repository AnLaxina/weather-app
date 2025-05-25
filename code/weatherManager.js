import APIManager from "./apiManager.js";

export default class WeatherManager {
   
    static data;

    // API Key: NJ5X7VJZ62AWQLWL5WCRJK7GV
    static async initialize(location) {
        // For now, let's just test out the API and see if everything is working.
        this.data = await APIManager.getWeatherInformation(location)
    }

    static logWeatherData() {
        console.log(this.data);
    }

    static getLocationInfo() {
        return {
            address: this.data.address,
            timezone: this.data.timezone
        }
    }

    static getCurrentConditions() {
        return {
            temp: this.data.currentConditions.temp,
            feelsLike: this.data.currentConditions.feelslike,
            humidity: this.data.currentConditions.humidity,
            wind: {
                speed: this.data.currentConditions.windspeed,
                dir: this.data.currentConditions.winddir
            },
            icon: this.data.currentConditions.icon,
            condition: this.data.currentConditions.conditions
        }
    }

    static getForecast() {
        return {
            precip: this.data.currentConditions.precip,
            precipProb: this.data.currentConditions.precipprob
        }
    }

    // This function may be optional, usually.... alerts are kinda..... rare?
    static getAlerts() {
        return {
            alerts: this.data.alerts.length > 1 ? this.data.alerts : "No alerts right now!"
        }
    }

    static printInformation(particularInfo) {
        for(const [key, value] of Object.entries(particularInfo)) {
            console.log(`${key}: ${value}`);
        }
    }
}