import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { EmailsComponent } from './components/emails/emails.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, PostsComponent, UsersComponent, EmailsComponent, AddPostComponent, AddUserComponent]
})
export class DashboardModule { }
