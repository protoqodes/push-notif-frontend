import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeModule } from './components/home/home.module'
@NgModule({
  imports: [CommonModule,DashboardRoutingModule,HomeModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
