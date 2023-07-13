import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  
  route!: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != '/home'){
        this.route = location.path();
        console.log(this.route)
      } else {
        this.route = 'Home'
        
      }
      if(this.route === 'Home'){
        document.body.style.backgroundImage ="url('assets/img/portfolio_img.webp')";
      }
      else{
        document.body.style.backgroundImage ="";
      }
    });
  }

  ngOnInit() {
  
  }
}
