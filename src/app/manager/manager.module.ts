import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Manager1Component } from './manager1/manager1.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { Manager2Component } from './manager2/manager2.component';
import { Manager3Component } from './manager3/manager3.component';
import { Manager4Component } from './manager4/manager4.component';




@NgModule({
  declarations: [
    Manager1Component,
    Manager2Component,
    Manager3Component,
    Manager4Component
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
