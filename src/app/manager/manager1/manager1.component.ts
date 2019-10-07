import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager1',
  templateUrl: './manager1.component.html',
  styleUrls: ['./manager1.component.css']
})
export class Manager1Component implements OnInit {
  dateFrom: Date;
  public dateTo: Date;
  constructor() { }

  ngOnInit() {
  }

  getData(): void {
    console.log(`from: ${this.dateFrom} to: ${this.dateTo}`);
  }
}
