import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';

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
  constructor(
    private api : SessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  addUser(user){
    console.log(user);

    this.api.Users.add(user.first_name,user.last_name,user.phone_number,user.email_add,user.username,user.password)
    .then(post =>{
        console.log(post);
        console.log('added');

    });

  }

}
