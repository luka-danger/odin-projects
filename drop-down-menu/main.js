import { clickDropDown } from "./click-drop.js"
import { hoverDropDown } from "./hover-drop.js"
import { hideMenuOnStart } from "./hide-menu.js";

document.addEventListener('DOMContentLoaded', () => {
    hideMenuOnStart();
    clickDropDown();
    hoverDropDown();
})