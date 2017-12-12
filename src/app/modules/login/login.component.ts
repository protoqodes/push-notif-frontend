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
      this.router.navigate(['/dashboard']);
    	console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
  }
}
