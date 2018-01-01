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
  public user_id: string;
  public first_name: string;
  public last_name : string;
  public phone_number : string;
  public email : string;
  public username : string;
  public password : string;

  constructor(
    private api : SessionService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    console.log('jake');
    this.route.params.subscribe(params => {

      // console.log(params['id']);
      this.user_id = params['id']
      this.api.Users.view(params['id']).then(user =>{
       
            this.user_id = user._id;
            this.first_name = user.first_name;
            this.last_name  = user.last_name;
            this.phone_number = user.mobile;
            this.email = user.email;
            this.username = user.username;
            this.password = user.password;
      })
    
    })

     console.log(this.first_name);
  }
  fileUpload(){
  	// client.pick().then(data => {
  	// this.file_url = data.filesUploaded[0].url
  	// });
  }
  editUser(data :any){
  	this.api.Users.edit(this.user_id,this.first_name,this.last_name,this.phone_number,this.email,this.username,this.password)
  	.then(post => {
  		this.router.navigate(['/users'])
  	})
  }
}
