import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditUserComponent } from './edit-user.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'edit/user/:id', component: EditUserComponent , pathMatch: 'full' }
        // { path: 'edit/post/:id', component: EditPostComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EditUserRoutingModule { }
