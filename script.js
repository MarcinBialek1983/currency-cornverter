
{
    const exchangeResult = (amount, currency) => {

        const rateEUR = document.querySelector(".js-EUR");
        const rateUSD = document.querySelector(".js-USD");
        const rateGBR = document.querySelector(".js-GBR");
        const rateCHF = document.querySelector(".js-CHF");
        const rateCAD = document.querySelector(".js-CAD");
        const rateNOK = document.querySelector(".js-NOK");
        const rateJPY = document.querySelector(".js-JPY");
        const rateCZK = document.querySelector(".js-CZK");

        switch (currency) {
            case "EUR":
                return amount / rateEUR.value;

            case "USD":
                return amount / rateUSD.value;

            case "GBR":
                return amount / rateGBR.value;

            case "CHF":
                return amount / rateCHF.value;

            case "NOK":
                return amount / rateNOK.value;

            case "CAD":
                return amount / rateCAD.value;

            case "JPY":
                return amount / rateJPY.value;

            case "CZK":
                return amount / rateCZK.value;
        };


    };

    const resultText = (amount, currency, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount.toFixed(2)} PLN na ${result.toFixed(2)} ${currency} `;
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = exchangeResult(amount, currency);

       resultText(amount, currency, result);
    };
    const init = () => {

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

    };
    init();

}