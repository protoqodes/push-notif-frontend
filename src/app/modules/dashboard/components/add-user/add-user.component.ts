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
  constructor(
    private api : SessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

 fileUpload(){
  client.pick().then(data => {
  this.file_url = data.filesUploaded[0].url
  });
}

  addUser(user){
    console.log( this.file_url);
    this.is_active = 0;
    this.api.Users.add(user.first_name,user.last_name,user.phone_number,user.email_add,user.username,user.password,this.is_active,this.file_url)
    .then(post =>{
        console.log(post);
        console.log('added');
        this.router.navigate(['/users'])

    });

  }

}
