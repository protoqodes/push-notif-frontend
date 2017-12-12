import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
// import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
