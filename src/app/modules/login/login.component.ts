import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../session.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
  	private api:SessionService,
  	private router: Router,
  	) { }

  ngOnInit() {
    if(localStorage.getItem('user_id')){
      this.router.navigate(['/dashboard']);
    }
  }
  logForm(data : any){
    console.log('test')
  	this.api.Users.login(data.email,data.password)
    .then(user =>{ 
        if(user.is_active == 0){
        throw new Error('Need to Confirm Code');
      }
      localStorage.setItem('user_email',user.user.email);
      localStorage.setItem('user_name',user.user.full_name);
      localStorage.setItem('user_mobile',user.user.mobile);
      localStorage.setItem('user_id',user.user._id);
      //this.router.navigate(['/dashboard']);
      location.reload()
    })
    .catch(error => {
      console.log(error)
    })
  }
}
