import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/shared/services/forgotpassword/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  public forgotForm: FormGroup;
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
  constructor(private router: Router, private forgotPassword: ForgotPasswordService) {}

  ngOnInit(): void {
    this.forgotForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
  }
  gotoLogin() {
    this.resetlink = true;
    this.forgotPassword.forgotPassword(this.forgotForm.value).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

    //this.router.navigate(['/admin/dashboard']);
  }
}
