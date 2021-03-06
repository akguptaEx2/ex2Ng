import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../user.model';
import { apiEndpoints } from './api.config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: string;
  user:User;
  apiUrl:string;
  constructor(private http: HttpClient) { 
    this.apiUrl = apiEndpoints.apiUsersUrl;
  }
  isLoggedIn():boolean{
    if(this.authToken)
      return true;
    let token =  localStorage.getItem('x-auth');
    if(!token)
      return false;
    let user = JSON.parse(localStorage.getItem('x-user'));
    this.authToken = token;
    this.user = user;
    return true;
  }

  get role():string|null{
    if(!this.user)
      return null;
    return this.user.role;
  }

  isAdmin():boolean{
    return this.role === 'admin';
  }

  login(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    let login$ = this.http.post<LoginResponse>(`${this.apiUrl}/login`,user,{headers}).pipe(catchError(e=>throwError(e)));
    return login$;
  }
  logout(){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    headers = headers.append('x-auth',this.authToken);
    let logout$ = this.http.delete(`${this.apiUrl}/me/logout`,{headers}).pipe(catchError(e=>throwError(e)));
    return logout$;
  }

  set Token(token: string){
    this.authToken = token;
  }
  set User(user:User){
    this.user = user;
  }
  storeTokenInfo(){
    if(this.authToken != null){
      localStorage.setItem( 'x-auth',this.authToken);
      localStorage.setItem('x-user',JSON.stringify(this.user));
    }
  }
  clearAuthInfo(){
    this.authToken = this.user = null;
    localStorage.removeItem('x-auth');
    localStorage.removeItem('x-user');
  }
}
export interface LoginResponse{
  success:boolean;
  data?:User;
  auth_token?:string;
}