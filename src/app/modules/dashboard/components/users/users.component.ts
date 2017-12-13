import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   public DataArray: Array<Object>;
  constructor(
    private api : SessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.api.Users.list()
    .then(users =>{
       this.DataArray = <Array<Object>> users;
       console.log(this.DataArray);
    });
  }

  deleteUser(user){

  }

}
