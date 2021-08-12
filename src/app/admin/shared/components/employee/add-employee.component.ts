import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { constants } from 'src/constants/constants';
import { environment } from 'src/environments/environment';
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
  public loaderShow: boolean = false;
  public fullScreen: boolean = true;
  public loaderTemplate = constants.loaderTemplate;


  public statusOptions = [
    { state: 'admin' },
    { state: 'employee' },
  ];

  public employeeName = {
    type: 'text',
    placeholder: 'Employee Name',
    class: 'form-control',
    field:'Employee Name'
  };
  public emp_phn = {
    type: 'text',
    placeholder: 'Phone Number',
    class: 'form-control',
    field:'Phone Number'
  };
  public emp_email = {
    type: 'text',
    placeholder: 'Email',
    class: 'form-control',
    field:'Email'
  };
  public emp_role = {
    type: 'text',
    placeholder: 'Role',
    class: 'form-control',
    field:'Role'
  };
  public emp_password = {
    type: 'password',
    placeholder: 'Password',
    class: 'form-control',
    field:'Password'
  };
  public emp_code = {
    type: 'text',
    placeholder: 'Employee Code',
    class: 'form-control',
    field:'Employee Code'
  };
  

  constructor(
    public ngbModal: NgbActiveModal,
    private employeeService: EmployeeService
  ) { }


  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      employee_name: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      phone_number: new FormControl('', [Validators.required, Validators.maxLength(13),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      role: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      employee_code: new FormControl('', [Validators.required,Validators.minLength(8)]),
    });
    this.setDialogProps(this.props);
  }

  setDialogProps(dialogdata: any) {
    console.log(dialogdata)
    this.type = dialogdata.type;
    this.data = dialogdata.data;
    this.employeeId =
      // this.type === 'edit' || this.type === 'view' ? dialogdata.data._id : '';
      this.title = dialogdata.title;
    this.buttons = dialogdata.buttons;
    if (['edit', 'view'].includes(this.type)) {
      this.employeeId = dialogdata.data._id;
      this.employeeForm.patchValue(this.data);
    }
  }

  onCreate() {
    if(!this.employeeForm.value.employee_name||!this.employeeForm.value.phone_number||!this.employeeForm.value.email||!this.employeeForm.value.password||!this.employeeForm.value.employee_code){
      this.employeeForm.markAllAsTouched()
      this.loaderShow = false;
    }
    else{
      this.loaderShow = true;
    this.employeeService.createEmployee(this.employeeForm.value).subscribe(
      (res) => {
        this.loaderShow = false;
        this.onCancel();
       
      },
      (err) => {
        console.log(err);
      }
    );
    }
  }

  onUpdate() {
    if(!this.employeeForm.value.employee_name||!this.employeeForm.value.phone_number||!this.employeeForm.value.email||!this.employeeForm.value.password||!this.employeeForm.value.employee_code){
      this.employeeForm.markAllAsTouched()
      this.loaderShow = false;
    }
    else{
      this.loaderShow = true;
    this.employeeService
      .updateEmployee(this.employeeId, this.employeeForm.value)
      .subscribe(
        (res) => {
          console.log(res)
          this.loaderShow = false;
          this.onCancel();
         
        },
        (err) => {
          console.log(err);
        }
      );
    }

  }

  onCancel() {
    this.ngbModal.close();
  }
}
