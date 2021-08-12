import { Component, OnInit } from '@angular/core';
import { DialogServiceService } from '../../../shared/services/dialog/dialog-service.service';
import { AddEmployeeComponent } from '../../shared/components/employee/add-employee.component';
import { DeleteComponent } from '../../../shared/components/delete/delete.component';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { environment } from 'src/environments/environment';
import { constants } from 'src/constants/constants';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(
    private dialogService: DialogServiceService,
    private employeeService: EmployeeService
  ) {}

  public loaderShow: boolean = false;
  public loaderTemplate: any = constants.loaderTemplate;
  public inputdata = {
    type: 'button',
    name: 'btn',
    class: 'btn btn-primary',
    value: 'Add New',
  };
  public actions = {
    edit: true,
    delete: true,
    add: true,
    view: true,
  };

  public columns = [
    {
      label: 'Employee Name',
      field: 'employee_name',
      isText: true,
    },
    {
      label: 'Phone number',
      field: 'phone_number',
      isText: true,
    },
    {
      label: 'E-mail',
      field: 'email',
      isText: true,
    },
    {
      label: 'Role',
      field: 'role',
      isText: true,
    },
    {
      label: 'Employee Code',
      field: 'employee_code',
      isText: true,
    },
  ];

  public employee;

  ngOnInit(): void {
    this.loaderShow = true;
    this.employeeService.getEmployee().subscribe(
      (res) => {
        this.employee = res;
        this.loaderShow = false;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.employeeService._employees$.subscribe((res) => {
      this.employee = res;
    });
  }
  opendialog(data: any) {
    this.dialogService
      .openDialog(
        {
          title: 'Add Employee',

          buttons: {
            add: 'Add',
            cancel: 'Cancel',
          },
          type: 'add',
          data: data,
        },
        AddEmployeeComponent
      )

  }
  deleteEmployee(data: any) {
    console.log(data, 'hello');
    this.dialogService
      .openDialog(
        {
          title: 'Delete Employee',

          buttons: {
            delete: 'Delete',
            cancel: 'Cancel',
          },
          data: data,
          type: 'deleteEmployee',
        },
        DeleteComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
  editEmployee(data: any) {
    console.log(data);
    this.dialogService
      .openDialog(
        {
          title: 'Edit Employee',

          buttons: {
            edit: 'Save',
            cancel: 'Cancel',
          },
          type: 'edit',
          data: data,
        },
        AddEmployeeComponent
      )
  }

  viewEmployee(data: any) {
    console.log(data);
    this.dialogService
      .openDialog(
        {
          title: 'View Employee',

          buttons: {
            cancel: 'Cancel',
          },
          type: 'view',
          data: data,
        },
        AddEmployeeComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
}
