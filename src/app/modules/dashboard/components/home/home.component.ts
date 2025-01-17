import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
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
  title_post:string='';
  description_post:string='';
  date_filter : string='';
  constructor(private api :SessionService,private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('user_id')){
       this.router.navigate(['/'])
    }

  	this.api.Posts.list(this.title_post,this.description_post,this.date_filter).then(posts =>{
      console.log(posts)
  		this.posts = posts.results
  		this.hasData =true

  	})
  	console.log(this.hasData)
  }
  title(value){
    this.title_post = value;
    this.api.Posts.list(this.title_post,this.description_post,this.date_filter).then(posts =>{
        console.log(posts)
        this.posts = posts.results
        this.hasData =true

      })
  }
  description(value){
    this.description_post = value;
    this.api.Posts.list(this.title_post,this.description_post,this.date_filter).then(posts =>{
        console.log(posts)
        this.posts = posts.results
        this.hasData =true

      })
  }

}
