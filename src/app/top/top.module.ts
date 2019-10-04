import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Top1Component } from './top1/top1.component';
import { Top2Component } from './top2/top2.component';
import { TopRoutingModule } from './top-routing.module';



@NgModule({
  declarations: [
    Top1Component,
    Top2Component
  ],
  imports: [
    CommonModule,
    TopRoutingModule
  ]
})
export class TopModule { }
