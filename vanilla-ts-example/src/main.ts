import { renderLayout } from "./Layout/renderLayout";
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { Currencies } from "./types/Currencies.js";
import "./style.css";

renderLayout();

const form = document.querySelector(".form") as HTMLFormElement;
const invoicesList = document.querySelector(".invoices-list") as HTMLUListElement;
const paymentsList = document.querySelector(".payments-list") as HTMLUListElement;

const invoicesTemplate = new ListTemplate(invoicesList);
const paymentsTemplate = new ListTemplate(paymentsList);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const currency = document.querySelector("#currency") as HTMLSelectElement;

form.addEventListener("submit", (e: Event): void => {
  e.preventDefault();
  let values: [string, string, number, Currencies];
  values = [toFrom.value, details.value, Number(amount.value), currency.value as Currencies];

  let note: HasFormatter;

  if (type.value === "invoice") {
    note = new Invoice(...values);
    invoicesTemplate.render(note, note.format());
  } else {
    note = new Payment(...values);
    paymentsTemplate.render(note, note.format());
  }
});
