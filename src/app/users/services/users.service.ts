import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { apiEndpoints } from './api.config';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl:string;
  users:User[]|User;
  constructor(private http: HttpClient) { 
    this.apiUrl = apiEndpoints.apiUsersUrl;
    this.http.get<UserResponse>(this.apiUrl).subscribe(data=>{
      this.users = data.data;
    },err=>{
      console.log(err.message);
    });
  }

  allUsers():Observable<UserResponse>{
    return this.http.get<UserResponse>(this.apiUrl).pipe(catchError(e=>throwError(e)));
  }

  get totalUsers():number|''{
    return this.users instanceof Array? this.users.length:'';
  }
  
  getUserName(user:User):string{
    if(!user.last_name)
      return user.first_name;
    return `${user.first_name} ${user.last_name}`;
  }
}
interface UserResponse{
  success:boolean,
  data?:User|User[],
  message?:string
}