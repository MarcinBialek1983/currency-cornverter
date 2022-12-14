
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

    let result;

    switch (currency) {
        case "EUR":
            result = amount / EUR.value;
            break;
        case "USD":
            result = amount / USD.value;
            break;
        case "GBR":
            result = amount / GBR.value;
            break;
        case "CHF":
            result = amount / CHF.value;
            break;
        case "NOK":
            result = amount / NOK.value;
            break;
        case "CAD":
            result = amount / CAD.value;
            break;
        case "JPY":
            result = amount / JPY.value;
            break;
        case "CZK":
            result = amount / CZK.value;
            break;
    }

    resultElement.innerText = `${amount.toFixed(2)} PLN na ${result.toFixed(2)} ${currency} `;
});
