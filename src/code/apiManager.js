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

    static async getWeatherInformationCoords(listOfCoords) {
        // This code is essentially the same as getWeatherInformation(location) but it takes in the coordinates instead of a given location
        let dataJson;
        try {
            const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${listOfCoords[0], listOfCoords[1]}/?key=NJ5X7VJZ62AWQLWL5WCRJK7GV&unitGroup=metric`);
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
            return [coords.latitude, coords.longitude];
        }
        catch(error) {
            alert("Something went wrong! Please input the location manually or change permission settings in your browser!");
        }
    }

    static getUserLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }
}