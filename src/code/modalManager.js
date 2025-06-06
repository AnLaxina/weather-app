import APIManager from "./apiManager";

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
        doneButton.addEventListener("click", () => {
            if (this.#checkValidInput()) {
                this.modal.close();
            }
        })
    }

    static #addEventListenersLocation() {
        const locationButton = document.getElementById("location-button");
        locationButton.addEventListener("click", () => {
            APIManager.getUserLocation();
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