import { plansList } from "./data.js";

const urlParams = new URLSearchParams(window.location.search);

let selectedPlan = parseInt(urlParams.get("plan"));
let monthly = urlParams.get("monthly") == "true" ? true : false;
let planSelected = document.getElementById("planSelected");

if (monthly) {
  planSelected.textContent =
    "You chose a monthly " + plansList[selectedPlan].name;
} else {
  planSelected.textContent =
    "You chose a yearly " + plansList[selectedPlan].name;
}

let checkoutForm = document.getElementById("checkoutForm");

checkoutForm.onsubmit = (target) => {
  target.preventDefault();

  if (
    checkoutForm.f_name.value == "" ||
    checkoutForm.l_name.value == "" ||
    checkoutForm.district.value == "" ||
    checkoutForm.address.value == "" ||
    checkoutForm.phonenumber.value == "" ||
    checkoutForm.cardnumber.value == "" ||
    checkoutForm.cvv.value == "" ||
    checkoutForm.expMonth.value == "" ||
    checkoutForm.expYear.value == ""
  ) {
    alert("Please fill all fields!");
    return;
  }
  
  let englishLetters = /^[A-Za-z0-9]*$/;
  if (!englishLetters.test(checkoutForm.f_name.value) ||
  !englishLetters.test(checkoutForm.l_name.value)) {
    alert("First and last name must be English letters only!");
    return;
  }

  if (checkoutForm.cardnumber.value.length != 16 ||
    isNaN(checkoutForm.cardnumber.value)) {
    alert ("Credit card number must be 16 digits!")
    return;
  }

  if (checkoutForm.cvv.value.length != 3 ||
    isNaN(checkoutForm.cvv.value)) {
    alert ("CVV must be 3 digits!")
    return;
  }

  const date = new Date();

  if (date.getFullYear() == parseInt(checkoutForm.expYear.value)) {
    
    if (parseInt(checkoutForm.expMonth.value) < date.getMonth()) {
        alert("Please insert valid expiration date");
        return;
    }
  }
  else if (date.getFullYear() > parseInt(checkoutForm.expYear.value)) {
    alert("Please insert valid expiration date");
    return;
  }
  
  window.location = "/thank_you.html?plan=" + selectedPlan;
};
