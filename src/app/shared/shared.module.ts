import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessedComponent } from './processed/processed.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DateInputsComponent } from './date-inputs/date-inputs.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CalendarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProcessedComponent,
    NotificationsComponent,
    DateInputsComponent
  ],
  exports: [
    ProcessedComponent,
    NotificationsComponent,
    CommonModule,
    DateInputsComponent
  ]
})

export class SharedModule { }
