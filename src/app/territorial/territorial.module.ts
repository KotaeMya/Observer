import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Territorial1Component } from './territorial1/territorial1.component';
import { Territorial2Component } from './territorial2/territorial2.component';
import { Territorial3Component } from './territorial3/territorial3.component';
import { TerritorialRoutingModule } from './territorial-routing.module';

@NgModule({
  declarations: [
    Territorial1Component,
    Territorial2Component,
    Territorial3Component
  ],
  imports: [
    CommonModule,
    TerritorialRoutingModule
  ]
})
export class TerritorialModule { }
