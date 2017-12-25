import { Component, OnInit } from '@angular/core';
import filestack from 'filestack-js';

import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';
const apikey = 'AFHvRuXHQeevnhfnlqdyAz';
const client = filestack.init(apikey);
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
 file_url : any;
 title : any;
 description : any;
 user_id : any;
 user : {
  first_name : any,
  last_name : any,
  phone_number : any,
  email : any,
  username : any,
  password : any
 }

  constructor(
    private api : SessionService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user_id = params['id']
      this.api.Users.view(params['id']).then(user =>{
          this.user.first_name = user.first_name
          this.user.last_name = user.last_name
          this.user.phone_number = user.phone_number
          this.user.email = user.email
          this.user.username = user.username
          this.user.password = user.password
      })
    
    })
  }
  
  editPost(user :any){
  	// console.log(data);
  	// console.log(this.file_url)
  	this.api.Users.edit(
      this.user_id,
      user.first_name,
      user.last_name,
      user.phone_number,
      user.email_add,
      user.username,
      user.password)
  	.then(post => {
  		this.router.navigate(['/dashboard'])
  	})
  }
}
