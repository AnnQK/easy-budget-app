export class Invoice {
    constructor(client, details, amount, currency) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.currency = currency;
    }
    format() {
        return `${this.client} owes ${this.amount}${this.currency} for ${this.details} `;
    }
}
