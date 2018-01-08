import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SendEmailComponent } from './send-email.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'email/send-email', component: SendEmailComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SendEmailRoutingModule { }
