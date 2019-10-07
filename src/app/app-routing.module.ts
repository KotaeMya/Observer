import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'manager1', pathMatch: 'full' }/*,
  { path: 'manager', redirectTo: 'manager1', pathMatch: 'full'},
  { path: 'territorial', redirectTo: 'territorial1', pathMatch: 'full'},
  { path: 'top', redirectTo: 'top1', pathMatch: 'full'}*/
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
