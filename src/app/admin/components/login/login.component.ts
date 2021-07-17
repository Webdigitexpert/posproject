import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public adminemail: any = 'your_mail@gmail.com';
  public adminpassword: any = 'password';
  constructor(public router: Router) {}

  login(data: any) {
    console.log(data);
    this.router.navigate(['/admin/categories']);
  }
  public email = {
    type: 'text',
    placeholder: 'Enter Email',
    class: 'form-control',
  };
  public password = {
    type: 'password',
    placeholder: 'Enter Password',
    class: 'form-control',
  };
  public data = {
    type: 'text',
    label: 'Username',
    tagname: 'username',
  };

  public submitbtn = {
    type: 'button',
    value: 'Login',
    class: 'btn btn-fill btn-wd',
  };

  ngOnInit(): void {}
  login_success() {
    this.router.navigate(['/admin/dashboard']);
  }
}
