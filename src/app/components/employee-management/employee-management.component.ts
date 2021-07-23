import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';

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
  public loaderTemplate = environment.loaderTemplate;
  public buttons
  public employeeData: any
  public addCustomers: boolean = false
  public employeeId: any
  public type: string // view, edit, create
  public editEmployeeForm: FormGroup
  @Input() props // employee primary key
  @Output() edit = new EventEmitter()

  public name = {
    type: 'text',
    placeholder: ''
  }

  public mobileNumber = {
    type: 'text',
    placeholder: ''
  }

  public email = {
    type: 'text',
    placeholder: ''
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
      email: new FormControl('', Validators.required)

    })
    this.setDialogProps(this.props)
    this.employeeDetails = this.AuthService.getEmployeeLoginDetails()
    console.log(this.employeeDetails)
    this.getEmployeeDetails()
  }

  getEmployeeDetails() {
    this.loaderShow = true
    debugger
    this.employeeService.getEmployeebyId(this.employeeDetails.employee_id).subscribe((res: any) => {
      this.employeeData = res
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
    this.editEmployeeForm.patchValue(this.employeeData)
    this.type = 'edit'
  }

  onEdit() {
    this.employeeService.updateEmployee(this.employeeDetails.employee_id,this.editEmployeeForm.value).subscribe((res:any)=>{
      console.log(res)
      this.modal.close()
    })
  }

}
