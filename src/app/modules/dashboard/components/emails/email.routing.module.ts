import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailComponent } from './email.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'email', component: EmailComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EmailRoutingModule { }