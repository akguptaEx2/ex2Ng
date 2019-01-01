import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  doLogout(){
    this.authService.logout().subscribe(d=>{
      console.log(d);
      this.authService.clearAuthInfo();
    },err=>{
      console.log(`Error: ${err.status}: message: ${err.error.message}`);
    });
  }
  ngOnInit() {
  }

}
