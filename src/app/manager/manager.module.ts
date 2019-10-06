import { NgModule } from '@angular/core';

import { Manager1Component } from './manager1/manager1.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { Manager2Component } from './manager2/manager2.component';
import { Manager3Component } from './manager3/manager3.component';
import { Manager4Component } from './manager4/manager4.component';
import { SharedModule } from '../shared/shared.module';
import { MainTabsComponent } from './main-tabs/main-tabs.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    Manager1Component,
    Manager2Component,
    Manager3Component,
    Manager4Component,
    MainTabsComponent
  ],
  imports: [
    ManagerRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class ManagerModule { }
