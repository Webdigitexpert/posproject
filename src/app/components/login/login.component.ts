import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { constants } from 'src/constants/constants';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public fullScreen: boolean = true;
  public loaderShow: boolean = false;
  public errorMessage: string
  public loaderTemplate = constants.loaderTemplate;
  public loginForm: FormGroup
  public employeeDetails

  constructor(private authService: AuthService, private router: Router) { }

  public username = {
    type: 'text',
    placeholder: 'Enter Email',
    field: 'Email'
  };

  public password = {
    type: 'password',
    placeholder: 'Password',
    field: 'Password'
  };

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  loginEmployee() {
    this.loginForm.markAllAsTouched();
    this.authService.employeeLogin(this.loginForm.value).subscribe((res: any) => {
      if (res.success) {
        this.employeeDetails = res
        localStorage.setItem('employeeDetails', JSON.stringify(this.employeeDetails))
        this.router.navigate(['/home'])
      }
      console.log(res.message)
        this.errorMessage = res.message;
    })
  }

}
