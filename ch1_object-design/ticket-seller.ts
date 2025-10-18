import { TicketOffice } from "./ticket-office";

export class TicketSeller {
  constructor(private readonly ticketOffice: TicketOffice) {}

  public getTicketOffice(): TicketOffice {
    return this.ticketOffice;
  }
}
