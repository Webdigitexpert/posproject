import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public loginuser: any = window.localStorage.getItem('loggedUser');
  constructor(public router: Router) {}
  public data = {
    type: 'text',
  };
  openDialog() {}

  ngOnInit(): void {
    if (window.localStorage.getItem('loggedUser') == null) {
      this.loginuser = '';
    }
  }
}
