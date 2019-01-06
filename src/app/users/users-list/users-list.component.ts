import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../user.model';
import { UsersService } from '../services/users.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  constructor(private authService: AuthService,private userService:UsersService) { }
  ngOnInit() {
  } 
  get users():User[]|User{
    return this.userService.users;
  }
  getName(user:User){
    return this.userService.getUserName(user);
  }
}
