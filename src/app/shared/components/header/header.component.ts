import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { EmployeeManagementComponent } from 'src/app/components/employee-management/employee-management.component';
import { DialogServiceService } from '../../services/dialog/dialog-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() edit = new EventEmitter

  constructor(private DialogService: DialogServiceService) { }

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
}
