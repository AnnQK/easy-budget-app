export function renderLayout(): void {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
<header>
<h1>Easy Budget App</h1>
</header>

<main>
<div className="data">
  <h2 class="data-title">List of expenses</h2>
  <ul class="list"></ul>
</div>

<form class="form">
  <label>
    Type:
    <select id="type">
      <option value="invoice">Invoice</option>
      <option value="payment">Payment</option>
    </select>
  </label>

  <label>
    To / From:
    <input type="text" id="tofrom" />
  </label>

  <label>
    Details:
    <input type="text" id="details" />
  </label>

  <label>
    Amount:
    <input type="number" id="amount" />
  </label>

  <label>
    Currency:
    <select id="currency">
      <option value="€">€</option>
      <option value="$">$</option>
      <option value="₽">₽</option>
      <option value="¥">¥</option>
    </select>
  </label>

  <button type="submit">Add</button>
</form>
<div className="listWrapper">
  <ul class="invoices-list">
    <li class="list-title">Invoices</li>
  </ul>
  <ul class="payments-list">
    <li class="list-title">Payments</li>
  </ul>
</div>
</main>
<footer>
<a href="https://github.com/AnnQK">GitHub</a>
</footer>
</div>
`;
}