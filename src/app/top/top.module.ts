import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Top1Component } from './top1/top1.component';
import { Top2Component } from './top2/top2.component';
import { TopRoutingModule } from './top-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainTabsComponent } from './main-tabs/main-tabs.component';

@NgModule({
  declarations: [
    Top1Component,
    Top2Component,
    MainTabsComponent
  ],
  imports: [
    CommonModule,
    TopRoutingModule,
    SharedModule
  ]
})
export class TopModule { }
