import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
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
  public confirm_pwd = {
    type: 'password',
    placeholder: 'Confirm Password',
    class: 'form-control',
  };
  public submit_btn = {
    type: 'button',
    value: 'Submit',
    class: 'btn btn-fill btn-wd',
  };
  public resetlink: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  gotoLogin() {
    this.resetlink = true;
     //this.router.navigate(['/admin/dashboard']);
  }
}
