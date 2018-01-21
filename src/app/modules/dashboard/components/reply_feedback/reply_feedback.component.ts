import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-reply-feedback',
  templateUrl: './reply_feedback.component.html',
  styleUrls: ['./reply_feedback.component.css']
})
export class ReplyFeedbackComponent implements OnInit {
	public DataArray: Array<Object>;
	public email: any;
	public feedback_id : any;
	public user_id : any;
	public is_active : any;
	  constructor(
	    private api : SessionService,
	    private route: ActivatedRoute,
	    private router: Router,
	  ) { }


	ngOnInit(){
		this.route.params.subscribe(params => {
			  this.feedback_id = params['feedback_id']
			  this.user_id = params['user_id']

		      this.api.Users.view(params['user_id']).then(user =>{
		        this.email = user.email;
		      })
	 	 })
	
	}

	replyFeedback(data){
		if(data.email === ''){
			data.email = this.email;
		}

		this.api.Feedback.reply(this.feedback_id,this.user_id,data.email,data.description)
		    .then(feedback =>{
		    	console.log(feedback);
		    });

	}

}
