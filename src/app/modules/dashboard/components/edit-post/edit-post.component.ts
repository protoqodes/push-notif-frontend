import { Component, OnInit } from '@angular/core';
import filestack from 'filestack-js';

import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';
const apikey = 'AFHvRuXHQeevnhfnlqdyAz';
const client = filestack.init(apikey);
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
 file_url : any;
 title : any;
 description : any;
 post_id : any;
  // : any;

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
      this.post_id = params['id']
      this.api.Posts.view(params['id']).then(post =>{
      console.log(post)
          this.title = post.results[0].title
          this.description = post.results[0].description
          this.file_url = post.results[0].img
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
    if(data.title == ''){
      data.title = this.title;
    }
    if(data.description == ''){
      data.description = this.description;
    }
  	this.api.Posts.edit(this.post_id,data.title,data.description,this.file_url)
  	.then(post => {
  		this.router.navigate(['/dashboard']);
  	})
  }
}
