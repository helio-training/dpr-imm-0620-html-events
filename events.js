// HTML DOM Element Variables
const light = document.getElementById("light");
const lightSwitch = document.getElementById("switch");
const alertText = document.getElementById("alert_text");
const alertBtn = document.getElementById("alert_btn");

// Event Handlers
const lightToggle = () => {
    light.innerHTML = "On";
}
const alertHandler = () => {
    alert(alertText.value);
}
const eventType = "click";

// Event Listeners & Variants
// lightSwitch.addEventListener("click", () => { light.innerHTML = "On"; });
lightSwitch.addEventListener(eventType, lightToggle);
alertBtn.addEventListener(eventType, alertHandler);