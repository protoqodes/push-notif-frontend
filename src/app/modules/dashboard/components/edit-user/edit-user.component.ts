import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  // public DataArray: Array<Object>;
  private id : string;
  constructor(
    private api : SessionService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    console.log('asda')
    // this.route.params.subscribe(params => {
    //   this.id = params['id'];
    //
    //   console.log(this.id);
    // //   this.post_id = params['id']
    // //   this.api.Posts.view(params['id']).then(post =>{
    // //       this.title = post.title
    // //       this.description = post.description
    // //       this.file_url = post.img
    //   })
    //
    // })
    // this.api.Users.list()
    // .then(users =>{
    //    this.DataArray = <Array<Object>> users;
    //    console.log(this.DataArray);
    // });
  }
  editUser(data :any){
  	// console.log(data);
  	// console.log(this.file_url)
  	// this.api.Posts.edit(this.post_id,data.title,data.description,this.file_url)
  	// .then(post => {
  	// 	this.router.navigate(['/dashboard'])
  	// })
  }
}
