import { Bag } from "./bag";
import { Ticket } from "./ticket";

export class Audience {
  constructor(private readonly bag: Bag) {}

  public buy(ticket: Ticket): number {
    if (this.bag.hasInvitation()) {
      this.bag.setTicket(ticket);
      return 0;
    }
    this.bag.minusAmount(ticket.getFee());
    this.bag.setTicket(ticket);
    return ticket.getFee();
  }
}
