import {BehaviorSubject, Observable, Subject} from 'rxjs';

export class MainTabsService {
  private subject$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  sendAmountNewVideos(amountVideos/*: number*/): void {
    this.subject$.next(amountVideos);
  }

  getAmountNewVideos(): Observable<number> {
    return this.subject$.asObservable();
  }
}
