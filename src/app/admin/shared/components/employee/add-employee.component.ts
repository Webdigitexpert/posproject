import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  @Input() props: any;
  public title = null;

  public buttons: any;
  public employeeId: string;
  public type: string;
  public data: any;
  public employeeForm: FormGroup;

  public statusOptions = [
    {
      state: 'user',
    },
    { state: 'admin' },
    { state: 'employee' },
  ];

  public employeeName = {
    type: 'text',
    placeholder: 'Employee Name',
    class: 'form-control',
  };
  public emp_phn = {
    type: 'text',
    placeholder: 'Phone Number',
    class: 'form-control',
  };
  public emp_email = {
    type: 'text',
    placeholder: 'Email',
    class: 'form-control',
  };
  public emp_role = {
    type: 'text',
    placeholder: 'Role',
    class: 'form-control',
  };
  public emp_password = {
    type: 'password',
    placeholder: 'Password',
    class: 'form-control',
  };
  public emp_code = {
    type: 'text',
    placeholder: 'Employee Code',
    class: 'form-control',
  };

  constructor(
    public ngbModal: NgbActiveModal,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      employee_name: new FormControl(),
      phone_number: new FormControl(),
      email: new FormControl(),
      role: new FormControl(),
      password: new FormControl(),
      employee_code: new FormControl(),
    });
    this.setDialogProps(this.props);
  }

  setDialogProps(dialogdata: any) {
    this.type = dialogdata.type;
    this.data = dialogdata.data;
    this.employeeId =
      this.type === 'edit' || this.type === 'view' ? dialogdata.data._id : '';
    this.title = dialogdata.title;
    this.buttons = dialogdata.buttons;
  }

  onCreate() {
    this.employeeService.createEmployee(this.employeeForm.value).subscribe(
      (res) => {
        this.onCancel();
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onUpdate() {
    this.employeeService
      .updateEmployee(this.employeeId, this.employeeForm.value)
      .subscribe(
        (res) => {
          this.onCancel();
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onCancel() {
    this.ngbModal.close();
  }
}
