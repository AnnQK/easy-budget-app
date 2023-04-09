export function renderLayout(): void {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="container">
<header>
<h1 class="header">Easy Budget App</h1>
</header>

<main>
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

  <button class="btn" type="submit">Add</button>
</form>

<div class="list-wrapper">
<h2 class="wrapper-title">List of expenses</h2>
<ul class="invoices-list list">
    <li class="list-title">Invoices</li>
  </ul>
  <ul class="payments-list list">
    <li class="list-title">Payments</li>
  </ul>
</div>
</main>
<footer class="footer">
<a href="https://github.com/AnnQK">GitHub</a>
</footer>
</div>
`;
}
