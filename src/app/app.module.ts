import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SessionService } from './session.service';
import { HttpModule } from '@angular/http';

import { NavbarComponent } from './shared/components/navbar/navbar.component'
import { ActiveEmailComponent } from './shared/components/activate_email/active_email.component'
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AddPostModule } from './modules/dashboard/components/add-post/add-post.module'
import { EmailModule } from './modules/dashboard/components/emails/email.module'
import { EditPostModule } from './modules/dashboard/components/edit-post/edit-post.module'
import { AddUserModule } from './modules/dashboard/components/add-user/add-user.module'
import { EditUserModule } from './modules/dashboard/components/edit-user/edit-user.module'
import { UsersModule } from './modules/dashboard/components/users/users.module'
import { SendEmailModule } from './modules/dashboard/components/emailsend/email-send.module'
import { FeedbacksModule } from './modules/dashboard/components/feedbacks/feedbacks.module'
import { ReplyFeedbackModule } from './modules/dashboard/components/reply_feedback/reply_feedback.module'
import { FeedbackVerifyComponent } from './modules/dashboard/components/feedback_verify/feedback_verify.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'activated_user/:id', component: ActiveEmailComponent},
  { path: 'verify/:id', component: FeedbackVerifyComponent},
  { path: '', component: LoginComponent }
];
@NgModule({
  //Components
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ActiveEmailComponent,
    FeedbackVerifyComponent
  ],
  //Modules
  imports: [
  NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DashboardModule,
    AddPostModule,
    EditPostModule,
    AddUserModule,
    UsersModule,
    EditUserModule,
    EmailModule,
    SendEmailModule,
    FeedbacksModule,
    ReplyFeedbackModule
  ],
  // Services
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
