import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component'
import { UsersRoutingModule } from './users.routing.module'
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [NgbModule.forRoot(),CommonModule,UsersRoutingModule,FormsModule],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
