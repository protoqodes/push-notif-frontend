import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailSendComponent } from './email-send.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'send/:email/:title', component: EmailSendComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EmailSendRoutingModule { }
