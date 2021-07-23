import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor() { }
  public loaderShow: boolean = false;
  public errorMessage: string
  public loaderTemplate = environment.loaderTemplate;
  public resetForm:FormGroup
  public username = {
    type: 'Password',
    placeholder: 'Confirm Password',
  };
  public password = {
    type: 'Password',
    placeholder: 'Password',
  };

  ngOnInit(): void {
    this.resetForm = new FormGroup ({
      password: new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('',[Validators.required])
    })
  }

}
