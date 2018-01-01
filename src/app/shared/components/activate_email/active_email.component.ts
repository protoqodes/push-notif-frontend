import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-active-email',
  templateUrl: './active_email.component.html',
  styleUrls: ['./active_email.component.css']
})
export class ActiveEmailComponent implements OnInit {
  user_id: string;
  constructor(
  	private api:SessionService,
  	private router: Router,
  	) { }

  ngOnInit() {
      console.log(this.router.url);
      var get_id = this.router.url.split("/")
      this.user_id = get_id[2];
      this.api.Users.activate_user(this.user_id).then(user =>{
        console.log(user);
            this.router.navigate(['/'])
      })
  
  }
  // logForm(data : any){
  //   console.log('test')
  // 	this.api.Users.login(data.email,data.password)
  //   .then(user =>{ 
  //     this.router.navigate(['/dashboard']);
  //   	console.log(user)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }
}
