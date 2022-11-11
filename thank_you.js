import { plansList } from "./data.js";
const urlParams = new URLSearchParams(window.location.search);
let plan_num = parseInt(urlParams.get("plan"));
let plan= document.getElementById("planSelected");
plan.textContent= "Thanks for purchasing " + plansList[plan_num].name;
