import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../../session.service'; 
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts : string[];
  hasData : boolean = false;
  constructor(private api :SessionService) { }

  ngOnInit() {
  	this.api.Posts.list().then(posts =>{
      console.log(posts)
  		this.posts = posts.results
  		this.hasData =true

  	})
  	console.log(this.hasData)
  }

}
