import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditUserComponent } from './edit-user.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'user/edit/:id', component: EditUserComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EditUserRoutingModule { }
