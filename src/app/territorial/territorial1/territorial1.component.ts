import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-territorial1',
  templateUrl: './territorial1.component.html',
  styleUrls: ['./territorial1.component.css']
})
export class Territorial1Component implements OnInit {
  territorialMenagerTable = [];
  retailerTable = [];
  constructor() { }

  ngOnInit() {

    this.territorialMenagerTable = [
      {
        id: 1,
        num: 8,
        up: true,
        name: 'Иконникова Елена',
        percent: 95,
        supPercent: 4
      },
      {
        id: 2,
        num: 8,
        up: true,
        name: 'Иконникова Елена',
        percent: 95,
        supPercent: 4
      },
      {
        id: 3,
        num: 8,
        up: false,
        name: 'Иконникова Елена',
        percent: 43,
        supPercent: -4
      },
      {
        id: 4,
        num: 8,
        up: false,
        name: 'Иконникова Елена',
        percent: 43,
        supPercent: -4
      }
    ];

    this.retailerTable = [
      {
        up: true,
        name: 'MARIY NAFTA',
        percent: 95,
        supPercent: 4
      },
      {
        up: true,
        name: 'MARIY NAFTA',
        percent: 95,
        supPercent: 4
      },
      {
        up: false,
        name: 'MARIY NAFTA',
        percent: 43,
        supPercent: -4
      },
      {
        up: false,
        name: 'MARIY NAFTA',
        percent: 43,
        supPercent: -4
      }
    ];
  }

}
