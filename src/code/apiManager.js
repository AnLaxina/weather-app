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

    static getUserLocation() {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = pos.coords;
            const latitude = coords.latitude;
            const longitude = coords.longitude;

            console.log(`Yeah, it's successful! Here are the coords:\nLatitude: ${latitude} Longitude: ${longitude}`);
        })
    }
}