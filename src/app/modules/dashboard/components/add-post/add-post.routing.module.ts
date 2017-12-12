import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'post', component: AddPostComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AddPostRoutingModule { }
