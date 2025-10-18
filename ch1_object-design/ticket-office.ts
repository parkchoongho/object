import { Ticket } from "./ticket";

export class TicketOffice {
  constructor(private amount: number, private readonly tickets: Ticket[]) {}

  public getTicket(): Ticket | undefined {
    return this.tickets.shift();
  }

  public minusAmount(amount: number): void {
    this.amount -= amount;
  }

  public plusAmount(amount: number): void {
    this.amount += amount;
  }
}
