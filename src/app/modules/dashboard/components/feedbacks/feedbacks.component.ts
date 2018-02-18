import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
	public feedbacks: Array<Object>;
	  constructor(
	    private api : SessionService,
	    private route: ActivatedRoute,
	    private router: Router,
	  ) { }

	ngOnInit(){
		var data = [];
		this.api.Feedback.list().then(feedback =>{
		    	if(feedback){
		    		console.log(feedback);
		    		feedback.forEach((item, index) => {
			    		if(item.user_id.length == 0){
			    			return false;
			    		}
		    			//console.log(item.user_id[0].is_verify);
				  		if(
				  		item.user_id[0].is_verify == '1' && 
				  		item.user_id[0].is_verify != undefined){
				  			data.push(item)
				  		}
					});
					}

		    });
		     this.feedbacks = <Array<Object>> data;
		     console.log(this.feedbacks);

		    };
	
}
