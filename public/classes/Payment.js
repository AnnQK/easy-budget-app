export class Payment {
    constructor(recipient, details, amount, currency) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.currency = currency;
    }
    format() {
        return `${this.recipient} has got ${this.amount}${this.currency} for ${this.details.toLowerCase()}`;
    }
}
