import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager2',
  templateUrl: './manager2.component.html',
  styleUrls: ['./manager2.component.css']
})
export class Manager2Component implements OnInit {
  data: any;
  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['0.0', 'π/2', 'π', '3π/2'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#37b980'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#e20700'
        }
      ]
    };
  }

}
