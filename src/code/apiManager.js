export default class APIManager {

    static async getWeatherInformation(location) {
        let dataJson;
        try {
            const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=NJ5X7VJZ62AWQLWL5WCRJK7GV&unitGroup=metric`);
            dataJson = await data.json();
        }
        catch (error) {
            alert(`Uh oh! An error has occured: ${error}`);
        }
        
        return dataJson;
    }

    static async getCurrentLocation() {
        try {
            const position = await this.getUserLocation();
            const coords = position.coords;
            console.log(`coords are: ${coords.latitude} : ${coords.longitude}`);
        }
        catch(error) {
            alert(error.message);
        }
    }

    static getUserLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }
}