import WeatherManager from "./code/weatherManager.js";
import DOMManager from "./code/domManager.js";
import ModalManager from "./code/modalManager.js";
import DateManager from "./code/dateManager.js";

// Since I'm using Vite, let's import them that way
import "./css/reset.css";
import "./font/pretendard.css";
import "./css/modal.css";
import "./css/style.css";

ModalManager.initialize();
await WeatherManager.initialize("Maple Ridge, BC");
await DOMManager.initialize();

WeatherManager.logWeatherData();