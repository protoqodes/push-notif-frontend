import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component'
import { EmailRoutingModule } from './email.routing.module'
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,EmailRoutingModule,FormsModule],
  declarations: [EmailComponent],
  exports: [EmailComponent]
})
export class EmailModule { }
