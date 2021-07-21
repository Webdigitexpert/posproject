import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { environment } from 'src/environments/environment';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public fullScreen: boolean = true;
  public loaderShow: boolean = false;
  public loaderTemplate = environment.loaderTemplate;
  public loginForm : FormGroup
  constructor(private authService: AuthService) {}
  public token

  public username = {
    type: 'text',
    placeholder: 'Username',
  };
  public password = {
    type: 'password',
    placeholder: 'password',
  };

  ngOnInit(): void {
    // this.loaderShow = true;
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    })
  }
  loginEmployee() {
    this.loaderShow = true;
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe(res =>{
      this.token = res
      // this.loaderShow =false
      localStorage.setItem('token',JSON.stringify(this.token.token))
    })
  }

}
