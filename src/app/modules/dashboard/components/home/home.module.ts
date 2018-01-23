import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
// import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbModule.forRoot(),CommonModule, HomeRoutingModule,FormsModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
