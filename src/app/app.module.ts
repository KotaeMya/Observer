import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ManagerComponent } from './manager/manager.component';
import { ManagerModule } from './manager/manager.module';
import { TerritorialComponent } from './territorial/territorial.component';
import { TerritorialModule } from './territorial/territorial.module';
import { TopComponent } from './top/top.component';
import { TopModule } from './top/top.module';
import { HeaderComponent } from './header/header.component';
// import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    TerritorialComponent,
    TopComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ManagerModule,
    TerritorialModule,
    TopModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule/*,
    MyDatePickerModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
