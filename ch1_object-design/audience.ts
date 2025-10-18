import { Bag } from "./bag";
import { Ticket } from "./ticket";

export class Audience {
  constructor(private readonly bag: Bag) {}

  public buy(ticket: Ticket): number {
    return this.bag.hold(ticket);
  }
}
