import { Component, OnInit } from '@angular/core';
import { DialogServiceService } from '../../../shared/services/dialog/dialog-service.service';
import { AddEmployeeComponent } from '../../shared/components/employee/add-employee.component';
import { DeleteComponent } from '../../../shared/components/delete/delete.component';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';

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
    },
    {
      label: 'Phone number',
      field: 'phone_number',
    },
    {
      label: 'E-mail',
      field: 'email',
    },
    {
      label: 'Role',
      field: 'role',
    },
    {
      label: 'Employee Code',
      field: 'employee_code',
    },
  ];

  public employee;

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(
      (res) => {
        this.employee = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.employeeService._employees$.subscribe((res)=>{
      this.employee =res
    })
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
      .then((res: any) => {
        console.log(res);
      });
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
      .then((res: any) => {
        console.log(res);
      });
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
