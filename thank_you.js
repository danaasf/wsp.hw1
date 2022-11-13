import { plansList } from "./data.js";

const urlParams = new URLSearchParams(window.location.search);
let plan_num = parseInt(urlParams.get("plan"));
let monthly = urlParams.get("monthly") == "true" ? true : false;
let planSelected = document.getElementById("planSelected");

if (monthly) {
  planSelected.textContent =
    "You chose a monthly " + plansList[plan_num].name;
} else {
  planSelected.textContent =
    "You chose a yearly " + plansList[plan_num].name;
}
