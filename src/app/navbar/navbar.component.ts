import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  doLogout(){
    this.authService.logout().subscribe(d=>{
      console.log(d);
      this.authService.clearAuthInfo();
      this.router.navigate(['/login']);
    },err=>{
      console.log(`Error: ${err.status}: message: ${err.error.message}`);
    });
  }
  ngOnInit() {
  }

}
