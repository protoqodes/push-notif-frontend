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
  // : any;

  constructor(
    private api : SessionService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.post_id = params['id']
      this.api.Posts.view(params['id']).then(post =>{
          this.title = post.title
          this.description = post.description
          this.file_url = post.img
      })
    
    })
  }
  fileUpload(){
  	client.pick().then(data => {
  	this.file_url = data.filesUploaded[0].url
  	});
  }
  editPost(data :any){
  	console.log(data);
  	console.log(this.file_url)
  	this.api.Posts.edit(this.post_id,data.title,data.description,this.file_url)
  	.then(post => {
  		this.router.navigate(['/dashboard'])
  	})
  }
}
