import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSendComponent } from './email-send.component'
import { EmailSendRoutingModule } from './email-send.routing.module'
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,EmailSendRoutingModule,FormsModule],
  declarations: [EmailSendComponent],
  exports: [EmailSendComponent]
})
export class SendEmailModule { }
