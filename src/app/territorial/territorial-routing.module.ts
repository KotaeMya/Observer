import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TerritorialComponent } from './territorial.component';
import { Territorial1Component } from './territorial1/territorial1.component';
import { Territorial2Component } from './territorial2/territorial2.component';
import { Territorial3Component } from './territorial3/territorial3.component';

const routes: Routes = [
    { path: '', component: TerritorialComponent, children: [
        { path: 'territorial1', component: Territorial1Component },
        { path: 'territorial2', component: Territorial2Component },
        { path: 'territorial3', component: Territorial3Component }
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

export class TerritorialRoutingModule { }
