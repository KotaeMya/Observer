import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessedComponent } from './processed/processed.component';
import { NotificationsComponent } from './notifications/notifications.component';


@NgModule({
  imports: [
  ],
  declarations: [
    ProcessedComponent,
    NotificationsComponent
  ],
  exports: [
    ProcessedComponent,
    NotificationsComponent,
    CommonModule
  ]
})

export class SharedModule { }
