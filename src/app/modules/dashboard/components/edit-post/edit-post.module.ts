import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './edit-post.component'
import { EditPostRoutingModule } from './edit-post.routing.module'
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,EditPostRoutingModule,FormsModule],
  declarations: [EditPostComponent],
  exports: [EditPostComponent]
})
export class EditPostModule { }
