import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbacksComponent } from './feedbacks.component'
import { FeedbacksRoutingModule } from './feedbacks.routing.module'
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,FeedbacksRoutingModule,FormsModule],
  declarations: [FeedbacksComponent],
  exports: [FeedbacksComponent]
})
export class FeedbacksModule { }
