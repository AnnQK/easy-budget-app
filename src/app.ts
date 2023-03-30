import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const currency = document.querySelector("#currency") as HTMLSelectElement;

form.addEventListener("submit", (e: Event): void => {
  e.preventDefault();

  let note: HasFormatter;

  if (type.value === "invoice") {
    note = new Invoice(toFrom.value, details.value, Number(amount.value), currency.value);
  } else {
    note = new Payment(toFrom.value, details.value, Number(amount.value), currency.value);
  }
  console.log(note.format());
});
