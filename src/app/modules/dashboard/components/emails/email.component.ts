import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../session.service';

@Component({
  selector: 'app-emails',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
comments : any;
  constructor(
  	private api:SessionService
  	) { }

  ngOnInit() {
  this.api.Comment.list().
  	then(comments =>{
  	console.log(comments)
  		this.comments = comments;
  	})

  }

}
