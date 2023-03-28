"use strict";
const form = document.querySelector(".form");
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, amount.valueAsNumber, currency.value);
});
