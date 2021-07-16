import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
 
  public loginForm : FormGroup
  constructor() {}

 

  login(data: any) {
    console.log(data);
    // this.router.navigate(['/dashboard']);
  }


  public username = {
    type: 'text',
    placeholder: 'Username',
  };
  public password = {
    type: 'password',
    placeholder: 'password',
  };

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    })
  }
  loginEmployee() {
    console.log(this.loginForm.value)
  }

}
