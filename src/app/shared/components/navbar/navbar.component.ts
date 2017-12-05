import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $ : any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
}
