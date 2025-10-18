import { Audience } from "./audience";
import { TicketSeller } from "./ticket-seller";

export class Theater {
  constructor(private readonly ticketSeller: TicketSeller) {}

  public enter(audience: Audience): void {
    this.ticketSeller.sellTo(audience);
  }
}
