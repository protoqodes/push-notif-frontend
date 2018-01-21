import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedbacksComponent } from './feedbacks.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'feedbacks', component: FeedbacksComponent }
    ])
  ],
  exports: [RouterModule]
})
export class FeedbacksRoutingModule { }
