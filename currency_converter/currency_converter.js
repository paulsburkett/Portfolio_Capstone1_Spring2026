const api = "https://api.exchange-api.com/v4/latest/USD";

let search = document.querySelector(".searchBox");
let convert = document.querySelector(".convert");
let fromCurrency = document.querySelector(".from");
let toCurrency = document.querrySelctor(".to");
let finalValue = document.querrySelector(".finalValue");
let resultFrom;
let resultTo;
let SearchValue;

fromCurrency.addEventListener('change', (event) => {resultFrom = `${event.target.value}`;});

toCurrency.addEventListener('change', (event) => {resultTo = `${event.target.value}`;})

search.addEventListener('input', updateValue);

function updateValue(e) {
    searchValue = e.target.value;
}

convert.addEventListener("click", getResults);

function getResults(){
    fetch(`${api}`)
    .then(currency => {return currency.json();}).then(displayResults);
}

function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.dispaly = "block";
}

function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};