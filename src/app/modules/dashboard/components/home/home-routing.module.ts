import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'dashboard', component: HomeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
