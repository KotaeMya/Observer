import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top2',
  templateUrl: './top2.component.html',
  styleUrls: ['./top2.component.css']
})
export class Top2Component implements OnInit {

  topManagers = [];
  topRetailers = [];
  topStations = [];

  bottomManagers = [];
  bottomRetailers = [];
  bottomStations = [];

  constructor() { }

  ngOnInit() {
    this.arraysInit();
  }

  arraysInit(): void {
    this.topManagers = [
      {
        id: 1,
        name: 'Иконникова Елена',
        up: true,
        percent: 95,
        supPercent: 4
      },
      {
        id: 2,
        name: 'Иконникова Елена',
        up: true,
        percent: 95,
        supPercent: 4
      },
      {
        id: 3,
        name: 'Иконникова Елена',
        up: true,
        percent: 95,
        supPercent: 4
      }
    ];
    this.topRetailers = [
      {
        id: 1,
        name: 'ETALON',
        up: true,
        percent: 95,
        supPercent: 4
      },
      {
        id: 2,
        name: 'ETALON',
        up: true,
        percent: 95,
        supPercent: 4
      },
      {
        id: 3,
        name: 'ETALON',
        up: true,
        percent: 95,
        supPercent: 4
      },
      {
        id: 4,
        name: 'ETALON',
        up: true,
        percent: 95,
        supPercent: 4
      },
      {
        id: 5,
        name: 'ETALON',
        up: true,
        percent: 95,
        supPercent: 4
      }
    ];
    this.topStations = [
      {
        id: 1,
        num: 33086,
        name: 'VOLCHANSKAYA',
        up: true,
        percent: 95,
        supPercent: 4
      },
      {
        id: 2,
        num: 33086,
        name: 'VOLCHANSKAYA',
        up: true,
        percent: 95,
        supPercent: 4
      },
      {
        id: 3,
        num: 33086,
        name: 'VOLCHANSKAYA',
        up: true,
        percent: 95,
        supPercent: 4
      },
      {
        id: 4,
        num: 33086,
        name: 'VOLCHANSKAYA',
        up: true,
        percent: 95,
        supPercent: 4
      },
      {
        id: 5,
        num: 33086,
        name: 'VOLCHANSKAYA',
        up: true,
        percent: 95,
        supPercent: 4
      }
    ];

    this.bottomManagers = [
      {
        id: 1,
        name: 'Иконникова Елена',
        up: false,
        percent: 95,
        supPercent: -4
      },
      {
        id: 2,
        name: 'Иконникова Елена',
        up: false,
        percent: 95,
        supPercent: -4
      },
      {
        id: 3,
        name: 'Иконникова Елена',
        up: false,
        percent: 95,
        supPercent: -4
      }
    ];
    this.bottomRetailers = [
      {
        id: 1,
        name: 'ETALON',
        up: false,
        percent: 95,
        supPercent: -4
      },
      {
        id: 2,
        name: 'ETALON',
        up: false,
        percent: 95,
        supPercent: -4
      },
      {
        id: 3,
        name: 'ETALON',
        up: false,
        percent: 95,
        supPercent: -4
      },
      {
        id: 4,
        name: 'ETALON',
        up: false,
        percent: 95,
        supPercent: -4
      },
      {
        id: 5,
        name: 'ETALON',
        up: false,
        percent: 95,
        supPercent: -4
      }
    ];
    this.bottomStations = [
      {
        id: 1,
        num: 33086,
        name: 'VOLCHANSKAYA',
        up: false,
        percent: 95,
        supPercent: -4
      },
      {
        id: 2,
        num: 33086,
        name: 'VOLCHANSKAYA',
        up: false,
        percent: 95,
        supPercent: -4
      },
      {
        id: 3,
        num: 33086,
        name: 'VOLCHANSKAYA',
        up: false,
        percent: 95,
        supPercent: -4
      },
      {
        id: 4,
        num: 33086,
        name: 'VOLCHANSKAYA',
        up: false,
        percent: 95,
        supPercent: -4
      },
      {
        id: 5,
        num: 33086,
        name: 'VOLCHANSKAYA',
        up: false,
        percent: 95,
        supPercent: -4
      }
    ];
  }
}
