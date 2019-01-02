import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
    });
    if(this.authService.isLoggedIn())
      return this.router.navigate(['/dashboard']);
  }
  get email(){
    return this.loginForm.get('email').value;
  }
  get password(){
    return this.loginForm.get('password').value;
  }
  doLogin(){
    if(this.loginForm.invalid)
      return;
      this.authService.login({email:this.email,password:this.password}).subscribe(d=>{
      this.authService.Token = d.auth_token;
      this.authService.User = d.data;
      this.authService.storeTokenInfo();
      return this.router.navigate(['/dashboard']);
    },err=>{
      console.log(`Error: ${err.status}: message: ${err.error.message}`);
    });
  }
}
