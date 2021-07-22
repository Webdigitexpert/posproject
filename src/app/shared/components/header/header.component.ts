import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeManagementComponent } from 'src/app/components/employee-management/employee-management.component';
import { AuthService } from '../../services/auth/auth.service';
import { DialogServiceService } from '../../services/dialog/dialog-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public employeeName
  @Output() edit = new EventEmitter
  public isLoggedIn:boolean = false
  public isLoggedOut:boolean =true

  constructor(private DialogService: DialogServiceService, private authService:AuthService, public router:Router) { }

  ngOnInit(): void {
  }
  viewDetails() {
    this.DialogService.openDialog({
      title: "Name",
      buttons: {
        negative: "Cancel",
      },
      flag : "view"
    }, EmployeeManagementComponent)
  }

  editCustomer() {
    this.DialogService.openDialog({
      title: "Add Cutomer",
      buttons: {
        positive: "Save",
        negative: "Cancel",
      },
      flag : "edit"
    }, EmployeeManagementComponent)
  }

  logout() {
    this.isLoggedOut = false
    this.isLoggedIn = true
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
