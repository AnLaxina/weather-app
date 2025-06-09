import APIManager from "./apiManager";
import WeatherManager from "./weatherManager";
import DOMManager from "./domManager";

export default class ModalManager {
    static modal;

    static initialize() {
        this.modal = document.querySelector("#location-popup");
        this.modal.showModal();

        this.#addEventListenersDone();
        this.#addEventListenersLocation();
        this.#preventEscClose();
        this.#addEnterInput();
    }

    static #addEventListenersDone() {
        const doneButton = document.getElementById("done-button");
        
        doneButton.addEventListener("click", async () => {
            if (this.#checkValidInput()) {
                const textInputValue = document.querySelector("input").value;
                await WeatherManager.initializeLocation(textInputValue);
                if (WeatherManager.data !== undefined) {
                    this.modal.close();
                    await DOMManager.initialize();
                }
            }
        })
    }

    static #addEventListenersLocation() {
        const locationButton = document.getElementById("location-button");
        locationButton.addEventListener("click", async () => {
            const listOfCoords = await APIManager.getCurrentLocation();
            const geocodeString = await APIManager.reverseGeocode(listOfCoords);
            await WeatherManager.initializeLocation(geocodeString);
            const dataJson = WeatherManager.data;

            if(dataJson !== undefined && geocodeString !== undefined) {
                this.modal.close();
                await DOMManager.initialize();
            }
        })
    }

    static #preventEscClose() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && this.modal.open) {
                e.preventDefault();
            }
        })
    }

    // This allows the user to hit the enter key as opposed to the "Done" button for more flexibility
    static #addEnterInput() {
        window.addEventListener("keypress", async (e) => {
            if(e.key === "Enter" && this.#checkValidInput()) {
                const textInputValue = document.querySelector("input").value;
                await WeatherManager.initializeLocation(textInputValue);
                if (WeatherManager.data !== undefined) {
                    this.modal.close();
                    await DOMManager.initialize();
                }
            }
        })
    }

    static #checkValidInput() {
        const textInput = document.querySelector("input");
        const validityState = textInput.validity;
        if(validityState.valueMissing) {
            textInput.setCustomValidity("Enter a valid location please!");
            textInput.reportValidity();
            return false;
        }
        return true;
    }
}