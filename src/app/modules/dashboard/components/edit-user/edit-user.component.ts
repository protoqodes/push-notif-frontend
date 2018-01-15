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
 // file_url : any;
 // title : any;
 // description : any;
 // user_id : any;

 // user : any = {
 //  first_name : any,
 //  last_name : any,
 //  phone_number : any,
 //  email_add : any,
 //  username : any,
 //  password : any
 // }

  public user_id: any;
  public first_name: string;
  public last_name : string;
  public phone_number : string;
  public email : string;
  public username : string;
  public password : string;
  public file_url : any;

  constructor(
    private api : SessionService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    if(!localStorage.getItem('user_id')){
       this.router.navigate(['/'])
    }
    this.route.params.subscribe(params => {
      this.user_id = params['id']
      // this.api.Users.view(params['id']).then(user =>{
      //     console.log(user)
      //     this.user.first_name = user.first_name
      //     this.user.last_name = user.last_name
      //     this.user.phone_number = user.phone_number
      //     this.user.email_add = user.email
      //     this.user.username = user.username
      //     this.user.password = user.password
      // })

       this.api.Users.view(params['id']).then(user =>{
          console.log(user)
            this.user_id = user._id;
            this.first_name = user.first_name;
            this.last_name  = user.last_name;
            this.phone_number = user.mobile;
            this.email = user.email;
            this.username = user.username;
            this.password = user.password;
            this.file_url = user.img;
      })

    })
  }

   fileUpload(){
    client.pick().then(data => {
    this.file_url = data.filesUploaded[0].url
    });
  }

  editUser(user :any){
  	console.log(user);
    console.log(this.user_id);
  	// console.log(this.file_url)
  	this.api.Users.edit(
      this.user_id,
      user.first_name,
      user.last_name,
      user.phone_number,
      user.email_add,
      user.username,
      user.password,
      this.file_url)
  	.then(post => {
      console.log(post);
  		this.router.navigate(['/users'])
  	})
  }
}
