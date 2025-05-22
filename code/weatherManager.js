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

    static printInformation(particularInfo) {
        for(const [key, value] of Object.entries(particularInfo)) {
            console.log(`${key}: ${value}`);
        }
    }
}