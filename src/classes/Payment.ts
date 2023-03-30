import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    readonly details: string,
    public amount: number,
    public currency: string
  ) {}
  format(): string {
    return `${this.recipient} has got ${this.amount}${
      this.currency
    } for ${this.details.toLowerCase()} `;
  }
}
