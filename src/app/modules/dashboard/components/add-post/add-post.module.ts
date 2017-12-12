import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post.component'
import { AddPostRoutingModule } from './add-post.routing.module'
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,AddPostRoutingModule,FormsModule],
  declarations: [AddPostComponent],
  exports: [AddPostComponent]
})
export class AddPostModule { }
