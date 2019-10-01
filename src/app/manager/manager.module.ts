import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { Manager1Component } from './manager1/manager1.component';
import { ManagerRoutingModule } from './manager-routing.module';



@NgModule({
  declarations: [ManagerComponent, Manager1Component],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
