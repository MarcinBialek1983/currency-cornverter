
console.log("Witam wszystkich w moim kantorze :)");

const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
let EUR = document.querySelector(".js-EUR");
let USD = document.querySelector(".js-USD");
let GBR = document.querySelector(".js-GBR");
let CHF = document.querySelector(".js-CHF");
let CAD = document.querySelector(".js-CAD");
let NOK = document.querySelector(".js-NOK");
let JPY = document.querySelector(".js-JPY");
let CZK = document.querySelector(".js-CZK");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let rate;

    switch (currency) {
        case "EUR":
            rate = EUR.value;
            break;
        case "USD":
            rate = USD.value;
            break;
        case "GBR":
            rate = GBR.value;
            break;
        case "CHF":
            rate = CHF.value;
            break;
        case "NOK":
            rate = NOK.value;
            break;
        case "CAD":
            rate = CAD.value;
            break;
        case "JPY":
            rate = JPY.value;
            break;
        case "CZK":
            rate = CZK.value;
    }
    
    const result = amount / rate;

    resultElement.innerText = `${amount.toFixed(2)} PLN na ${result.toFixed(2)} ${currency} `;
});
