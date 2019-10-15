import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager4',
  templateUrl: './manager4.component.html',
  styleUrls: ['./manager4.component.css']
})
export class Manager4Component implements OnInit {

  public fueler = {
    status: true,
    symbol: 'assets/images/plusIcon.png',
    btn1: true,
    btn2: false,
    btn3: false,
    btn4: false,
    btn1Open: () => {
      this.fueler.btn1 = !this.fueler.btn1;
    },
    btn2Open: () => {
      this.fueler.btn2 = !this.fueler.btn2;
    },
    btn3Open: () => {
      this.fueler.btn3 = !this.fueler.btn3;
    },
    btn4Open: () => {
      this.fueler.btn4 = !this.fueler.btn4;
    },
    storeUhot: [
      {

      }
    ]
  };
  public operator = {
    status: false,
    symbol: 'assets/images/plusIcon.png',
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn1Open: () => {
      this.operator.btn1 = !this.operator.btn1;
    },
    btn2Open: () => {
      this.operator.btn2 = !this.operator.btn2;
    },
    btn3Open: () => {
      this.operator.btn3 = !this.operator.btn3;
    },
    btn4Open: () => {
      this.operator.btn4 = !this.operator.btn4;
    }
  };
  constructor() { }

  ngOnInit() {
  }

  operatorOpen() {
    this.operator.status = !this.operator.status;

    if (this.operator.status) {
      this.operator.symbol = 'assets/images/minusIcon.png';
    } else {
      this.operator.symbol = 'assets/images/plusIcon.png';
    }
  }
  fuelerOpen() {
    this.fueler.status = !this.fueler.status;

    if (this.fueler.status) {
      this.fueler.symbol = 'assets/images/minusIcon.png';
    } else {
      this.fueler.symbol = 'assets/images/plusIcon.png';
    }
  }

}
