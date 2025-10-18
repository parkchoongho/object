import { Audience } from "./audience";
import { TicketOffice } from "./ticket-office";

export class TicketSeller {
  constructor(private readonly ticketOffice: TicketOffice) {}

  public sellTo(audience: Audience): void {
    const ticket = this.ticketOffice.getTicket();
    if (ticket) {
      this.ticketOffice.plusAmount(audience.buy(ticket));
    }
  }
}
