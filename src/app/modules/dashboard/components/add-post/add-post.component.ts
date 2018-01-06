import { Component, OnInit } from '@angular/core';
import filestack from 'filestack-js';

import { SessionService } from '../../../../session.service'; 
import {  Router } from '@angular/router';
const apikey = 'AFHvRuXHQeevnhfnlqdyAz';
const client = filestack.init(apikey);
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
 file_url : any;
 title : any;
 description : any;
  constructor(private api : SessionService, private router: Router) { }

  ngOnInit() {
  }
  fileUpload(){
  	client.pick().then(data => {
  	this.file_url = data.filesUploaded[0].url
  	});
  }
  addPost(data :any){
  	console.log(data);
  	console.log(this.file_url)
  	this.api.Posts.add(data.title,data.description,this.file_url)
  	.then(post => {
  		console.log(post)
      this.router.navigate(['/dashboard'])
  	})
  }
}
