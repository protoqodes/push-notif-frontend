import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../../session.service';
import { ActivatedRoute,Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   public DataArray: Array<Object>;
    modalReference :any;

  constructor(
    private api : SessionService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    if(!localStorage.getItem('user_id')){
       this.router.navigate(['/'])
    }
    if(localStorage.getItem('permission') == '1'){
    this.api.Users.list('0')
    .then(users =>{
       this.DataArray = <Array<Object>> users;
       console.log(this.DataArray);
    });
    }
    else{
    this.api.Users.list('1')
    .then(users =>{
       this.DataArray = <Array<Object>> users;
       console.log(this.DataArray);
    });
    } 
  }

  open(content) {
    this.modalReference  = this.modalService.open(content);

    this.modalReference.result.then((result) => {
     
    }, (reason) => {
     
    });
  }

  deleteUser(user_id){
    console.log(this.modalService);

    this.api.Users.delete(user_id)
    .then(users =>{
        this.modalReference.close();
        this.ngOnInit();
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
