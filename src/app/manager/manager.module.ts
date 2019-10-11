import { NgModule } from '@angular/core';

import { Manager1Component } from './manager1/manager1.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { Manager2Component } from './manager2/manager2.component';
import { Manager3Component } from './manager3/manager3.component';
import { Manager4Component } from './manager4/manager4.component';
import { SharedModule } from '../shared/shared.module';
import { MainTabsComponent } from './main-tabs/main-tabs.component';

import { FormsModule } from '@angular/forms';
import { DateService } from '../shared/services/date.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    Manager1Component,
    Manager2Component,
    Manager3Component,
    Manager4Component,
    MainTabsComponent
  ],
  imports: [
    FormsModule,
    ManagerRoutingModule,
    SharedModule,
    NgbModule,
    ChartModule
  ],
  providers: [
    DateService
  ]
})
export class ManagerModule { }
