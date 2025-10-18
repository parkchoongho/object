export class Ticket {
  constructor(private readonly fee: number) {}

  public getFee(): number {
    return this.fee;
  }
}
