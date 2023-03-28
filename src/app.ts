const form = document.querySelector(".form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const currency = document.querySelector("#currency") as HTMLSelectElement;

form.addEventListener("submit", (e: Event): void => {
  e.preventDefault();
  console.log(type.value, toFrom.value, amount.valueAsNumber, currency.value);
});
