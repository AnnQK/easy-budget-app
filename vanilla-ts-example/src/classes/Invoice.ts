import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
  constructor(
    public client: string,
    readonly details: string,
    public amount: number,
    public currency: string
  ) {}

  format(): string {
    return `${this.client} owes ${this.amount}${this.currency} for ${this.details} `;
  }
}
