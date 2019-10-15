import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager3',
  templateUrl: './manager3.component.html',
  styleUrls: ['./manager3.component.css']
})
export class Manager3Component implements OnInit {

  stationStatistics = [];
  constructor() { }

  ngOnInit() {
    this.stationStatistics = [
      {
        id: 1,
        num: 8,
        up: true,
        stationNum: 33086,
        name: 'VOLCHANSKAYA',
        percent: 95,
        supPercent: 4
      },
      {
        id: 2,
        num: 8,
        up: true,
        stationNum: 33086,
        name: 'VOLCHANSKAYA',
        percent: 95,
        supPercent: 4
      },
      {
        id: 3,
        num: 8,
        up: false,
        stationNum: 33086,
        name: 'VOLCHANSKAYA',
        percent: 43,
        supPercent: -4
      },
      {
        id: 4,
        num: 8,
        up: false,
        stationNum: 33086,
        name: 'VOLCHANSKAYA',
        percent: 43,
        supPercent: -4
      },

    ];
  }

}
