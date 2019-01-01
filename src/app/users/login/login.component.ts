import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
    });
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
    },err=>{
      console.log(`Error: ${err.status}: message: ${err.error.message}`);
      //clear local storage
      // this.authService.clearAuthInfo();
    });
  }
}
