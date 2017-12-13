import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user.component'
import { AddUserRoutingModule } from './add-user.routing.module'
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,AddUserRoutingModule,FormsModule],
  declarations: [AddUserComponent],
  exports: [AddUserComponent]
})
export class AddUserModule { }
