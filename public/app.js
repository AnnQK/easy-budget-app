import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".form");
const invoicesList = document.querySelector(".invoices-list");
const paymentsList = document.querySelector(".payments-list");
const invoicesTemplate = new ListTemplate(invoicesList);
const paymentsTemplate = new ListTemplate(paymentsList);
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
        invoicesTemplate.render(note, note.format());
    }
    else {
        note = new Payment(toFrom.value, details.value, Number(amount.value), currency.value);
        paymentsTemplate.render(note, note.format());
    }
});
