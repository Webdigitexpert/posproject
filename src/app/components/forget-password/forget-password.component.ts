import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordService } from 'src/app/shared/services/forgotpassword/forgot-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class EmployeeForgetPasswordComponent implements OnInit {

  constructor(private forgetPasswordService:ForgotPasswordService) { }
  public forgetPasswordForm:FormGroup
  public message:string
  public isSent:boolean = false
  public email = {
    type: 'text',
    placeholder: 'Enter Email',
    class: 'form-control',
    field:'Email'
  };
  public submit_btn = {
    type: 'button',
    value: 'Submit',
    class: 'btn btn-fill btn-wd',
  };

  ngOnInit(): void {
    this.forgetPasswordForm = new FormGroup({
      email:new FormControl('',Validators.required)
    })
  }
  onSubmit() {
    this.forgetPasswordService.forgotPassword(this.forgetPasswordForm.value).subscribe((res:any)=>{
      console.log(res)
      if(res.success) {
        this.message = res.message
        this.isSent = true
      }
    })
  }

}
