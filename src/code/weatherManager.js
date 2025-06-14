import APIManager from "./apiManager.js";

export default class WeatherManager {
   
    static data;

    // API Key: NJ5X7VJZ62AWQLWL5WCRJK7GV
    static async initializeLocation(location) {
        // For now, let's just test out the API and see if everything is working.
        this.data = await APIManager.getWeatherInformation(location);
    }

    static async initializeCoords(listOfCoords) {
        this.data = await APIManager.getWeatherInformationCoords(listOfCoords);
    }

    static logWeatherData() {
        console.log(this.data);
    }

    // This function retrieves the information from the API that I think is needed
    // these are all made up of "get {x}" functions for modularity
    static getWeatherData() {
        return {
            locationInfo: this.getLocationInfo(),
            currentConditions: this.getCurrentConditions(),
            forecast: this.getForecast(),
            alerts: this.getAlerts()
        }
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
            alerts: this.data.alerts.length >= 1 ? this.data.alerts[0].description : "No alerts right now!"
        }
    }

    static getWeekForecast() {
        const daysOfWeek = {};
        for(let i = 1; i <= 7; i++) {
            const neededInformation = [this.data.days[i].datetime, this.data.days[i].temp, this.data.days[i].icon];
            daysOfWeek[i] = neededInformation;
        }
        return daysOfWeek;
    }

    static printInformation(particularInfo) {
        for(const [key, value] of Object.entries(particularInfo)) {
            console.log(`${key}: ${value}`);
        }
    }
}