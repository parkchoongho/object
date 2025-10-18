import { Audience } from "./audience";
import { TicketSeller } from "./ticket-seller";

export class Theater {
  constructor(private readonly ticketSeller: TicketSeller) {}

  public enter(audience: Audience): void {
    if (audience.getBag().hasInvitation()) {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();
      if (ticket) {
        audience.getBag().setTicket(ticket);
      }
    } else {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();

      if (ticket) {
        audience.getBag().minusAmount(ticket.getFee());
        this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
        audience.getBag().setTicket(ticket);
      }
    }
  }
}
