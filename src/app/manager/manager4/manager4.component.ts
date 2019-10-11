import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager4',
  templateUrl: './manager4.component.html',
  styleUrls: ['./manager4.component.css']
})
export class Manager4Component implements OnInit {

  public operator = {
    status: false,
    symbol: 'assets/images/plusIcon.png'
  };
  public fueler = {
    status: false,
    symbol: 'assets/images/plusIcon.png'
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
