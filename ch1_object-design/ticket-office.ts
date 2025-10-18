import { Audience } from "./audience";
import { Ticket } from "./ticket";

export class TicketOffice {
  constructor(private amount: number, private readonly tickets: Ticket[]) {}

  private getTicket(): Ticket | undefined {
    return this.tickets.shift();
  }

  private plusAmount(amount: number): void {
    this.amount += amount;
  }

  public sellTicketTo(audience: Audience): void {
    const ticket = this.getTicket();
    if (ticket) {
      this.plusAmount(audience.buy(ticket));
    }
  }
}
