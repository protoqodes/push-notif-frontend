import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
	public DataArray: Array<Object>;
	  constructor(
	    private api : SessionService,
	    private route: ActivatedRoute,
	    private router: Router,
	  ) { }


	ngOnInit(){
		this.api.Feedback.list()
		    .then(feedback =>{
		    	var data = [];
		    	if(feedback){
		    		feedback.forEach((item, index) => {
				  		if(item.user_id[0].is_verify == '1'){
				  			data.push(item)
				  		}
					});

		    	}
		       this.DataArray = <Array<Object>> data;
		       console.log(this.DataArray);
		    });
	}
}
