import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplyFeedbackComponent } from './reply_feedback.component'
import { ReplyFeedbackRoutingModule } from './reply_feedback.routing.module'
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,ReplyFeedbackRoutingModule,FormsModule],
  declarations: [ReplyFeedbackComponent],
  exports: [ReplyFeedbackComponent]
})
export class ReplyFeedbackModule { }
