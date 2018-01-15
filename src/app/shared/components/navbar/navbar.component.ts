import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
declare var jquery: any;
declare var $ : any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
has_login : boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('user_id')){
        this.has_login =true;
    }
  }

  toggleNavbar(){
    if(!$('.navbar-toggler').hasClass('open-menu')) {

      $('main .container').css({"max-width": "60%", "margin-left": "10%"});
    }
    else {
      $('main .container').css({"max-width": "100%", "margin-left": "0", "margin": "0 auto"});
    }

    $('body').toggleClass('open-menu');
    $('.navbar-toggler').toggleClass('open-menu');
  }
  logout(){
      localStorage.removeItem('user_email');
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_mobile');
      localStorage.removeItem('user_id');
      this.router.navigate(['/']);
      location.reload();
  }
}
