import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-manager1',
  templateUrl: './manager1.component.html',
  styleUrls: ['./manager1.component.css']
})
export class Manager1Component implements OnInit {

  dateTo: Date;
  dateFrom: Date;

  videos = [
    {
      video1: 'assets/images/videoPreview.png',
      video2: 'assets/images/videoPreview.png',
      date: '12.12.12',
      operator: 'Иванов И.И.',
      camera: 1,
      greeting: true,
      offer: true,
      regionalAction: true,
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
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  getData(): void {
    console.log(`from: ${this.dateFrom} to: ${this.dateTo}`);
  }
}
