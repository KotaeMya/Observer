import { Component, OnInit } from '@angular/core';
import {MainTabsService} from '../../shared/services/main-tabs.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.css']
})
export class MainTabsComponent implements OnInit {

  public unviewedVideos$: Observable<number>;

  constructor(private mainTabsService: MainTabsService) { }

  ngOnInit() {
    this.unviewedVideos$ = this.mainTabsService.getAmountNewVideos().pipe(
      map( value => value));
  }

}
