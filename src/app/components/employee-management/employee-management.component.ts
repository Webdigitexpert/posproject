import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})
export class EmployeeManagementComponent implements OnInit {

  public title: string = null
  public body: string = null
  public buttons
  public addCustomers: boolean = false

  public type: string // view, edit, create
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

  @Output() delete = new EventEmitter()
  constructor(public modal: NgbActiveModal, private deleteCustomerService:CustomerService) { }

  ngOnInit(): void {
    this.setDialogProps(this.props)
  }

  deleteCustomer(id) {
    this.deleteCustomerService.deleteCustomer(id).subscribe((customerDelete)=>{
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

  editDetails() {
    this.type = "edit"
    this.title = "Edit Customer"
    this.buttons = "Save"
  }
  
}
