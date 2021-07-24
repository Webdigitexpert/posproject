import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
//import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public adminDetails
  public loginuser: any = window.localStorage.getItem('loggedUser');
  constructor(public router: Router, public authService:AuthService) {}
  public data = {
    type: 'text',
  };
  openDialog() {}

  ngOnInit(): void {
    this.getAdminDetails()
  }
  logout() {
    this.authService.logout()
    this.router.navigate(['/admin'])
  }
  getAdminDetails() {
    this.adminDetails=this.authService.getAdminDetails()
    console.log(this.adminDetails)
  }
}
