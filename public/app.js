import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".form");
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let note;
    if (type.value === "invoice") {
        note = new Invoice(toFrom.value, details.value, Number(amount.value), currency.value);
    }
    else {
        note = new Payment(toFrom.value, details.value, Number(amount.value), currency.value);
    }
    console.log(note.format());
});
