import { Component, OnInit } from '@angular/core';
import filestack from 'filestack-js';

import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';
const apikey = 'AFHvRuXHQeevnhfnlqdyAz';
const client = filestack.init(apikey);
@Component({
  selector: 'app-send-email',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.css']
})
export class EmailSendComponent implements OnInit {
 email : any;
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
  this.route.params.subscribe(params => {
  console.log(params)
    this.title = params['title'];
    this.email = params['email'];
  }) 

  }
  Send(data :any){
    this.api.Email.send(
      data.title,this.email,data.message
    ).
    then(response =>{
      console.log(response)
      this.router.navigate(['/email']);
    }).
    catch(response =>{
      console.log(response)
    })
  }
  
}
