import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public adminemail: any = 'your_mail@gmail.com';
  public adminpassword: any = 'password';
  public loginForm: FormGroup;
  public adminDetails: any;
  public errorMessage: string;
  constructor(public router: Router, private authService: AuthService) {}

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

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  adminLogin() {
    this.authService.login(this.loginForm.value).subscribe((res: any) => {
      if (res.success) {
        this.adminDetails = res;
        localStorage.setItem('loginDetails', JSON.stringify(this.adminDetails));
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.errorMessage = res.msg;
      }
    });
  }
}
