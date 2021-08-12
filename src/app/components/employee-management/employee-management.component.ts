import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';
import { constants } from 'src/constants/constants';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})
export class EmployeeManagementComponent implements OnInit {

  public title: string = null
  public body: string = null
  public fullScreen: boolean = true;
  public loaderShow: boolean = false;
  public loaderTemplate = constants.loaderTemplate;
  public buttons
  public employeeName :string
  public phoneNumber:any
  public role:string
  public emailAdderss:any
  public employeeData: any
  public addCustomers: boolean = false
  public employeeId: any
  public code:any
  public type: string // view, edit, create
  public editEmployeeForm: FormGroup
  @Input() props // employee primary key
  @Output() edit = new EventEmitter()

  public name = {
    type: 'text',
    placeholder: '',
    field: 'Employee name'
  }

  public mobile = {
    type: 'text',
    placeholder: '',
    field: 'Mobile number'
  }

  public email = {
    type: 'text',
    placeholder: '',
    field: 'Email'
  }

  public employeeCode = {
    type: 'text',
    placeholder: '',
    field: 'Employee Code'
  }
  public password = {
    type: 'text',
    placeholder: '',
    field: 'Password'
  }
  public employeeDetails: any

  @Output() delete = new EventEmitter()
  constructor(public modal: NgbActiveModal,
    private deleteCustomerService: CustomerService,
    private AuthService: AuthService,
    private employeeService: EmployeeService,
    
  ) {

  }

  ngOnInit(): void {
    this.editEmployeeForm = new FormGroup({
      employee_name: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      password:new FormControl('',Validators.required),
      employee_code: new FormControl('', Validators.required)
    })
    this.setDialogProps(this.props)
    this.employeeDetails = this.AuthService.getEmployeeLoginDetails()
    debugger
    console.log(this.employeeDetails)
    this.getEmployeeDetails()
  }

  getEmployeeDetails() {
    this.loaderShow = true
    debugger
    this.employeeService.getEmployeebyId(this.employeeDetails.employee_id).subscribe((res: any) => {
      this.employeeData = res
      console.log(this.employeeData)
        this.employeeName = this.employeeData.employee_name;
        this.code = this.employeeData.employee_code;
        this.phoneNumber = this.employeeData.phone_number;
        this.emailAdderss = this.employeeData.email;
        this.role = this.employeeData.role
      this.loaderShow = false
      console.log(res)
    })
  }

  deleteCustomer(id) {
    this.loaderShow = true
    this.deleteCustomerService.deleteCustomer(id).subscribe((customerDelete) => {
      this.loaderShow = false
      console.log(customerDelete)
    })
    this.delete.emit()
  }

  setDialogProps(props: any) {
    this.title = props.title;
    this.body = props.body;
    this.buttons = props.buttons;
    this.type = props.flag
    console.log(this.title)
  }
  dismiss() {
    this.modal.close()
  }

  editEmployeeDetails() {
    if(!this.editEmployeeForm.valid) {
      this.editEmployeeForm.markAllAsTouched()
    }
    console.log(this.employeeData)
    this.editEmployeeForm.patchValue({
      email: this.employeeData.email,
      employee_code: this.employeeData.employee_code,
      employee_name : this.employeeData.employee_name ,
      phone_number:  this.employeeData.phone_number,
      role: this.employeeData.role,
    })
    this.type = 'edit'
  }

  onEdit() {
    if(this.editEmployeeForm.invalid) {
      console.log(this.editEmployeeForm.invalid)
      this.editEmployeeForm.markAllAsTouched()
    }
    else  {
      this.employeeService.updateEmployee(this.employeeDetails.employee_id,this.editEmployeeForm.value).subscribe((res:any)=>{
        console.log(res)
        this.modal.dismiss()
      })
    }
     
  }

}
