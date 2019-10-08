
export class DateSerice {
  dateFrom: Date;
  dateTo: Date;
  getDates(data): void {
    this.dateFrom = data[0];
    this.dateTo = data[1];
    console.log(this.dateFrom, this.dateTo);
  }
}
