import { plansList } from "./data.js";

const table = document.getElementById("plansTable");

for (let i = 0; i < plansList.length; i++) {

    let rows = document.querySelectorAll("table#plansTable tr");

    //creating the element using createElement 
    let nameTh = document.createElement("th");
    //textContent fills the element with text
    nameTh.textContent = plansList[i].name;
    //appendChild 
    rows[0].appendChild(nameTh);

    let planBr = document.createElement("br");
    nameTh.appendChild(planBr);
    
    let planBtn = document.createElement("button");
    planBtn.onclick = (target => {
        window.location = "/cycle.html?plan=" + i;
    });

    planBtn.textContent= plansList[i].yearlySubPrice;
    nameTh.appendChild(planBtn);

    let monthlySubTh = document.createElement("th");
    monthlySubTh.textContent = plansList[i].monthlySubPrice;
    rows[1].appendChild(monthlySubTh);
    
    let yearlySubTh = document.createElement("th");
    yearlySubTh.textContent = plansList[i].yearlySubPrice;
    rows[2].appendChild(yearlySubTh);
    
    let gamesCount = document.createElement("th");
    gamesCount.textContent = plansList[i].gamesCount;
    rows[3].appendChild(gamesCount);
    
    let coins = document.createElement("th");
    coins.textContent = plansList[i].coins;
    rows[4].appendChild(coins);
    
    let specialAvatar = document.createElement("th");
    specialAvatar.textContent = plansList[i].specialAvatar;
    rows[5].appendChild(specialAvatar);
    
    let tShirt = document.createElement("th");
    tShirt.textContent = plansList[i].tShirt;
    rows[6].appendChild(tShirt);

    let customerCare = document.createElement("th");
    customerCare.textContent = plansList[i].customerCare;
    rows[7].appendChild(customerCare);
}
