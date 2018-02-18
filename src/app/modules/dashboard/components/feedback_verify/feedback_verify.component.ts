import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-feedback-verify',
  templateUrl: './feedback_verify.component.html',
  styleUrls: ['./feedback_verify.component.css']
})

export class FeedbackVerifyComponent implements OnInit {
	public DataArray: Array<Object>;
  public user_id:any;
	  constructor(
	    private api : SessionService,
	    private route: ActivatedRoute,
	    private router: Router,
	  ) { }


	ngOnInit(){
      var get_id = this.router.url.split("/")
      this.user_id = get_id[2];
      this.api.Feedback.verify_user(this.user_id).then(user =>{
        console.log(user);
      })
	}
}
