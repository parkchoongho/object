import { Bag } from "./bag";

export class Audience {
  constructor(private readonly bag: Bag) {}

  public getBag(): Bag {
    return this.bag;
  }
}
