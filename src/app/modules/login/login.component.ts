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
  }
  logForm(data : any){
    console.log('test')
  	this.api.Users.login(data.email,data.password)
    .then(user =>{ 

        if(user.user.is_active == 0){
        throw new Error('Need to Confirm Email');
      }
      
      this.router.navigate(['/dashboard']);
    	console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
  }
}
