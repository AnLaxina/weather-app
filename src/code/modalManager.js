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
    }

    static #addEventListenersDone() {
        const doneButton = document.getElementById("done-button");
        
        doneButton.addEventListener("click", async () => {
            if (this.#checkValidInput()) {
                this.modal.close();
                const textInputValue = document.querySelector("input").value;
                await WeatherManager.initializeLocation(textInputValue);
                await  DOMManager.initialize();
            }
        })
    }

    static #addEventListenersLocation() {
        const locationButton = document.getElementById("location-button");
        locationButton.addEventListener("click", async () => {
            const listOfCoords = await APIManager.getCurrentLocation();
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