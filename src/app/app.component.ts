import { Component, OnInit } from '@angular/core';
import { AuthService } from './users/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  title = 'apiFrontEnd';
  constructor(private authService: AuthService){}
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
}
