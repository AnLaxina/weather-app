export default class APIManager {

    static async getWeatherInformation(location) {
        let dataJson;
        try {
            const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=NJ5X7VJZ62AWQLWL5WCRJK7GV`);
            dataJson = await data.json();
        }
        catch (error) {
            alert(`Uh oh! An error has occured: ${error}`);
        }
        
        return dataJson;
    }
}