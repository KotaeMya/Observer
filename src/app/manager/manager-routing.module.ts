import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { Manager1Component } from './manager1/manager1.component';
import { Manager2Component } from './manager2/manager2.component';
import { Manager3Component } from './manager3/manager3.component';
import { Manager4Component } from './manager4/manager4.component';
import { VideosComponent } from './manager1/videos/videos.component';

const routes: Routes = [
    { path: '', component: ManagerComponent, children: [
        { path: 'manager1', component: Manager1Component, children:[
            {path: ':name', component: VideosComponent}
          ] },
        { path: 'manager2', component: Manager2Component },
        { path: 'manager3', component: Manager3Component },
        { path: 'manager4', component: Manager4Component }
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

export class ManagerRoutingModule { }
