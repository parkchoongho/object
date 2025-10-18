import { Invitation } from "./invitation";
import { Ticket } from "./ticket";

export class Bag {
  constructor(
    private amount: number,
    private readonly invitation?: Invitation,
    private ticket?: Ticket
  ) {}

  private hasInvitation(): boolean {
    return this.invitation !== null;
  }

  private setTicket(ticket: Ticket): void {
    this.ticket = ticket;
  }

  private minusAmount(amount: number): void {
    this.amount -= amount;
  }

  hold(ticket: Ticket): number {
    if (this.hasInvitation()) {
      this.setTicket(ticket);
      return 0;
    }
    this.setTicket(ticket);
    this.minusAmount(ticket.getFee());
    return ticket.getFee();
  }
}
