import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Top1Component } from './top1/top1.component';
import { Top2Component } from './top2/top2.component';
import { TopRoutingModule } from './top-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainTabsComponent } from './main-tabs/main-tabs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    Top1Component,
    Top2Component,
    MainTabsComponent
  ],
  imports: [
    CommonModule,
    TopRoutingModule,
    SharedModule,
    NgbModule,
    ChartModule
  ]
})
export class TopModule { }
