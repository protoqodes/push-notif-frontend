import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReplyFeedbackComponent } from './reply_feedback.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'feedback/reply_feedback/:feedback_id/:user_id', component: ReplyFeedbackComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ReplyFeedbackRoutingModule { }
