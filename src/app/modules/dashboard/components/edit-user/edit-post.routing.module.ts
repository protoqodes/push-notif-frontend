import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditPostComponent } from './edit-post.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'edit/post/:id', component: EditPostComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EditPostRoutingModule { }
