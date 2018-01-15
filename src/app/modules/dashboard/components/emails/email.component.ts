import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-emails',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
comments : any;
  constructor(
  	private api:SessionService,
    private router: Router
  	) { }

  ngOnInit() {
  if(!localStorage.getItem('user_id')){
       this.router.navigate(['/'])
    }
  this.api.Comment.list().
  	then(comments =>{
  	console.log(comments)
  		this.comments = comments;
  	})

  }

}
