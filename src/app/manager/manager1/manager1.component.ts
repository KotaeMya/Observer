import {Component, OnInit, OnDestroy} from '@angular/core';
import {DateService} from '../../shared/services/date.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {MainTabsService} from '../../shared/services/main-tabs.service';

@Component({
  selector: 'app-manager1',
  templateUrl: './manager1.component.html',
  styleUrls: ['./manager1.component.css']
})
export class Manager1Component implements OnInit, OnDestroy {
  private unSubscribe$: Subject<void> = new Subject<void>();

  public dateTo: Date;
  public dateFrom: Date;

  public newBtn = true;
  public watchedBtn = false;
  public favoriteBtn = false;

  public page = 1; // начальная страница пагинации
  public pageSize = 4; // кол-во элементов страницы пагинации

  public videos = [];
  private newVideos = [];
  private watchedVideos = [];
  private favoriteVideos = [];

  // filters
  public filters = false;
  public filtersKpi = false;
  // filters

  constructor(
    private dateService: DateService,
    private mainTabsService: MainTabsService
    ) { }

  ngOnInit() {
    this.initArrays();
    this.getDatesFromCalendar();
  }

  initArrays(): void {
    this.videos = this.newVideos = [
      {
        video1: 'assets/images/videoPreview.png',
        video2: 'assets/images/videoPreview.png',
        date: new Date('10/13/2019'), // mm/dd/yy
        operator: 'Иванов И.И.',
        camera: 1,
        greeting: true,
        offer: true,
        regionalAction: true,
        show: true,
        watched: false,
        favorite: false
      },
      {
        video1: 'assets/images/videoPreview.png',
        video2: 'assets/images/videoPreview.png',
        date: new Date('02/02/2019'),
        operator: 'Иванов И.И.',
        camera: 1,
        greeting: true,
        offer: true,
        regionalAction: true,
        show: true,
        watched: false,
        favorite: false
      },
      {
        video1: 'assets/images/videoPreview.png',
        video2: 'assets/images/videoPreview.png',
        date: new Date('03/02/2019'),
        operator: 'Иванов И.И.',
        camera: 1,
        greeting: true,
        offer: true,
        regionalAction: true,
        show: true,
        watched: false,
        favorite: false
      },
      {
        video1: 'assets/images/videoPreview.png',
        video2: 'assets/images/videoPreview.png',
        date: new Date('02/28/2019'),
        operator: 'Иванов И.И.',
        camera: 1,
        greeting: true,
        offer: true,
        regionalAction: true,
        show: true,
        watched: false,
        favorite: false
      }
    ];
    this.favoriteVideos = [
      /*{
        video1: 'assets/images/videoPreview.png',
        video2: 'assets/images/videoPreview.png',
        date: '12.12.12',
        operator: 'Иванов И.И.',
        camera: 1,
        greeting: true,
        offer: true,
        regionalAction: true,
        show: true,
        watched: true,
        favorite: true
      }*/
    ];
    this.watchedVideos = [
      {
        video1: 'assets/images/videoPreview.png',
        video2: 'assets/images/videoPreview.png',
        date: '12.12.12',
        operator: 'Иванов И.И.',
        camera: 1,
        greeting: true,
        offer: true,
        regionalAction: true,
        show: true,
        watched: true,
        favorite: false
      },
      {
        video1: 'assets/images/videoPreview.png',
        video2: 'assets/images/videoPreview.png',
        date: '12.12.12',
        operator: 'Иванов И.И.',
        camera: 1,
        greeting: true,
        offer: true,
        regionalAction: true,
        show: true,
        watched: true,
        favorite: false
      }
    ];

    this.amountNewVideos();
  }
  getDatesFromCalendar(): void {
    this.dateService.getDates().pipe(
      takeUntil(this.unSubscribe$)
    ).subscribe(dates => {
        this.dateFrom = dates[0];
        this.dateTo = dates[1];

        this.showVideosByDates();
      }
    );
  }
  showVideosByDates(): void {
    this.videos.forEach( item => {
      if (item.date >= this.dateFrom && item.date <= this.dateTo) {
        item.show = true;
      } else {
        item.show = false;
      }
    });
}

  amountNewVideos(): void {
    this.mainTabsService.sendAmountNewVideos(this.videos.length);
  } // передает кол-во непросмотренных видео

  newVideosShow(): void {
    this.newBtn = true;
    this.watchedBtn = false;
    this.favoriteBtn = false;

    this.videos = this.newVideos;
    this.amountNewVideos();
  }

  watchedVideosShow(): void {
    this.newBtn = false;
    this.watchedBtn = true;
    this.favoriteBtn = false;

    this.videos = this.watchedVideos;
  }

  watchedVideo(item, index): void {
    // проигрывается видео
    this.newVideos.splice(index, 1);
    this.videos = this.newVideos;
    this.watchedVideos.push(item);
    item.watched = true;

    this.amountNewVideos();
  }

  favoriteVideosShow(): void {
    this.newBtn = false;
    this.watchedBtn = false;
    this.favoriteBtn = true;

    this.videos = this.favoriteVideos;
  }

  favoriteAdd(item, index): void {
    if (!item.watched) {
      this.newVideos.splice(index, 1);
      this.videos = this.newVideos;
      this.watchedVideos.push(item);
      this.favoriteVideos.push(item);
      item.watched = item.favorite = true;

      this.amountNewVideos();
    } else if (item.watched && !item.favorite) {
        this.favoriteVideos.push(item);
        item.favorite = true;
    } else if (item.favorite) {
        let i = 0;
        this.favoriteVideos.forEach( favoriteItem => {
          if (favoriteItem === item) {
            this.favoriteVideos.splice(i, 1);
          }
          i++;
        });
        item.favorite = false;
    }
  }

  filtersShow() {
    this.filters = !this.filters;
  }
  filtersKpiShow() {
    this.filtersKpi = !this.filtersKpi;
  }

  ngOnDestroy() {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
