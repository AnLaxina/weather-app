export default class APIManager {

    static async getWeatherInformation(location) {
        let dataJson;
        try {
            const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=NJ5X7VJZ62AWQLWL5WCRJK7GV&unitGroup=metric`);
            dataJson = await data.json();
        }
        catch (error) {
            alert(`Try again! It's most likely an invalid location!`);
        }
        
        return dataJson;
    }

    static async getWeatherInformationCoords(listOfCoords) {
        // This code is essentially the same as getWeatherInformation(location) but it takes in the coordinates instead of a given location
        let dataJson;
        try {
            const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${listOfCoords[0]}, ${listOfCoords[1]}/?key=NJ5X7VJZ62AWQLWL5WCRJK7GV&unitGroup=metric`);
            dataJson = await data.json();
        }
        catch (error) {

        }
        
        return dataJson;
    }

    static async getCurrentLocation() {
        try {
            const position = await this.getUserLocation();
            const coords = position.coords;
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

    static async reverseGeocode(listOfCoords) {
        try {
            const data = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${listOfCoords[0]}&lon=${listOfCoords[1]}`);
            const dataJson = await data.json();
            return this.getGeocodeName(dataJson);
        }
        catch (error) {
            console.log(`Couldn't reverse geocode! Because the error is: ${error}`);
        }
    }

    static getGeocodeName(dataJson) {
        return `${dataJson.address.city}, ${dataJson.address.country}`;
    }
}