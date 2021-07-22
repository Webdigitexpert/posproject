import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class EmployeeForgetPasswordComponent implements OnInit {

  constructor() { }
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

  ngOnInit(): void {
  }

}
