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
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AddPostModule } from './modules/dashboard/components/add-post/add-post.module'
import { EditPostModule } from './modules/dashboard/components/edit-post/edit-post.module'
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];
@NgModule({
  //Components
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  //Modules
  imports: [
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
    EditPostModule
  ],
  // Services
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
