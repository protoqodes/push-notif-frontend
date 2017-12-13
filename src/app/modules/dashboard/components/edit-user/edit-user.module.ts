import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user.component'
import { EditUserRoutingModule } from './edit-user.routing.module'
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,EditUserRoutingModule,FormsModule],
  declarations: [EditUserComponent],
  exports: [EditUserComponent]
})
export class EditUserModule { }
