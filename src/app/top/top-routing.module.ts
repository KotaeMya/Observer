import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './top.component';
import { Top1Component } from './top1/top1.component';
import { Top2Component } from './top2/top2.component';

const routes: Routes = [
  { path: '', component: TopComponent, children: [
      { path: 'top1', component: Top1Component },
      { path: 'top2', component: Top2Component }
      ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class TopRoutingModule { }
