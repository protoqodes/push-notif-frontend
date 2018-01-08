import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendEmailComponent } from './send-email.component'
import { SendEmailRoutingModule } from './send-email.routing.module'
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,SendEmailRoutingModule,FormsModule],
  declarations: [SendEmailComponent],
  exports: [SendEmailComponent]
})
export class SendEmailModule { }
