import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';
import filestack from 'filestack-js';
const apikey = 'AFHvRuXHQeevnhfnlqdyAz';
const client = filestack.init(apikey);

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  first_name: string;
  last_name : string;
  mobile : string;
  email : string;
  username : string;
  password : string;
  is_active : number;
  file_url : any;
  permission : any;
  is_super_admin : string;

  constructor(
    private api : SessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  if(!localStorage.getItem('user_id')){
       this.router.navigate(['/'])
    }
    console.log(localStorage.getItem('permission'));
    if(localStorage.getItem('permission') === '1'){
       this.is_super_admin = '1'
    }
    else{
      this.permission = '0';
    }
  }

 fileUpload(){
  client.pick().then(data => {
  this.file_url = data.filesUploaded[0].url
  });
}

  addUser(user){
    this.is_active = 0;
    if(this.is_super_admin ==='1'){

    this.permission = user.permission;
    }
    else{
      this.permission = '0';
    }
    if(user.permission == ''){
    this.permission = '0';
    }
    this.api.Users.add(user.first_name,user.last_name,user.phone_number,user.email_add,user.username,user.password,this.is_active,this.file_url,this.permission)
    .then(post =>{
        console.log(post);
        console.log('added');
        this.router.navigate(['/users'])

    });

  }

}
