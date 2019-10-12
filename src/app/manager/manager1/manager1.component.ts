import {Component, OnInit} from '@angular/core';
import {DateService} from '../../shared/services/date.service';

@Component({
  selector: 'app-manager1',
  templateUrl: './manager1.component.html',
  styleUrls: ['./manager1.component.css']
})
export class Manager1Component implements OnInit {

  public dateTo: Date;
  public dateFrom: Date;

  public newBtn = true;
  public watchedBtn = false;
  public favoriteBtn = false;

  public page = 1;
  public pageSize = 4;

  public videos = [];
  public newVideos = [];
  public watchedVideos = [];
  public favoriteVideos = [];

  // filters
  public filters = false;
  public filtersKpi = false;
  // filters

  public favoriteImg = 'assets/images/star.png';

  constructor(private dateService: DateService) { }

  ngOnInit() {
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

    this.dateService.getDates().subscribe(dates => {
      this.dateFrom = dates[0];
      this.dateTo = dates[1];

      this.showVideosByDates();
        // Date.parse(data[0]) < Date.parse(this.videos[0].date) ? console.log('Yes') : console.log('No'); --Date in ms
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

  newVideosShow(): void {
    this.newBtn = true;
    this.watchedBtn = false;
    this.favoriteBtn = false;

    this.videos = this.newVideos;
  }

  watchedVideosShow(): void {
    this.newBtn = false;
    this.watchedBtn = true;
    this.favoriteBtn = false;

    this.videos = this.watchedVideos.reverse();
  }

  watchedVideo(item, index): void {
    // проигрывается видео
    this.newVideos.splice(index, 1);
    this.videos = this.newVideos;
    this.watchedVideos.push(item);
    item.watched = true;
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
    } else if (item.watched && !item.favorite) {
      this.favoriteVideos.push(item);
      item.favorite = true;
    } else if (item.favorite) {
      this.favoriteVideos.splice(index, 1);
      item.favorite = false;
    }
  }

  filtersShow() {
    this.filters = !this.filters;
  }
  filtersKpiShow() {
    this.filtersKpi = !this.filtersKpi;
  }
}
