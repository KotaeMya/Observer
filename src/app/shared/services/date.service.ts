import {Subject} from 'rxjs';

export class DateService {
  subject$ = new Subject();

  setDates(data): void {
    console.log( 'Day: ', data[0].getDate(), 'Month: ', data[0].getMonth() + 1, 'Year: ', data[0].getFullYear());
    this.subject$.next(data);
  }

  getDates() {
    return this.subject$.asObservable();
  }
}
