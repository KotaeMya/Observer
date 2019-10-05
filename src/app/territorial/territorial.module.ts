import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Territorial1Component } from './territorial1/territorial1.component';
import { Territorial2Component } from './territorial2/territorial2.component';
import { Territorial3Component } from './territorial3/territorial3.component';
import { TerritorialRoutingModule } from './territorial-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainTabsComponent } from './main-tabs/main-tabs.component';
import { Territorial4Component } from './territorial4/territorial4.component';

@NgModule({
  declarations: [
    Territorial1Component,
    Territorial2Component,
    Territorial3Component,
    MainTabsComponent,
    Territorial4Component
  ],
  imports: [
    CommonModule,
    TerritorialRoutingModule,
    SharedModule
  ]
})
export class TerritorialModule { }
