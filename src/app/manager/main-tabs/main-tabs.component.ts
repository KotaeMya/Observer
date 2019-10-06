import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.css']
})
export class MainTabsComponent implements OnInit {

  private unviewedVideos: number = 100;

  constructor() { }

  ngOnInit() {
  }

}
