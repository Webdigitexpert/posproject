import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../../services/customers/customer.service';
import { CartService } from './../../services/cart/cart.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  @Input() props

  public addCustomerForm: FormGroup

  public statusOptions = [
    {
      state: "Active"
    },
    {
      state: "Inactive"
    }
  ]
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

  public title: string = null
  public body: string = null
  public buttons
  public addCustomers: boolean = false

  constructor(public modal: NgbActiveModal, private customerService: CustomerService, private cartService: CartService) { }


  ngOnInit(): void {
    this.addCustomerForm = new FormGroup({
      customer_name: new FormControl('', [Validators.required]),
      customer_mobile: new FormControl('', Validators.required),
      customer_email: new FormControl('', Validators.required),
      status: new FormControl('Active', Validators.required)
    })
    this.setDialogProps(this.props)
  }

  setDialogProps(props: any) {
    this.title = props.title;
    this.body = props.body;
    this.buttons = props.buttons
    console.log(this.title)
  }

  addCustomer() {
    this.customerService.postCustomer(this.addCustomerForm.value).subscribe((res) => {
      this.cartService.setCustomer(res.customer)
      this.modal.dismiss();
    })
  }

}
