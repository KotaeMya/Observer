import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ManagerComponent } from './manager/manager.component';
import { ManagerModule } from './manager/manager.module';
import { TerritorialComponent } from './territorial/territorial.component';
import { TerritorialModule } from './territorial/territorial.module';
import { TopRoutingModule } from './top/top-routing.module';
import { TopComponent } from './top/top.component';
import { TopModule } from './top/top.module';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    TerritorialComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManagerModule,
    TerritorialModule,
    TopModule,
    TopRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
