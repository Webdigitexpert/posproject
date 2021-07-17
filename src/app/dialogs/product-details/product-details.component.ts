import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public title: string = null
  public body: string = null
  public buttons
  public addCustomers: boolean = false
  public productData

  @Input() props: any

  @Output() customerDetails = new EventEmitter
  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.setDialogProps(this.props)
  }


  setDialogProps(props: any) {
    this.productData = props.data
    this.title = props.title;
    this.body = props.body;
    this.buttons = props.buttons;
    console.log(this.title)
  }

  onAction(action: any) {
    this.modal.close(JSON.stringify(action));
  }

  public name = {
    type: "text",
    placeholder: "Enter Name",
  }
  public mobileNumber = {
    type: "tel",
    placeholder: "Enter mobile number",
  }
  public email = {
    type: "email",
    placeholder: "Email Address",
  }
  addCustomer() {
    this.addCustomers = true
  }

  dismiss() {
    this.modal.close()
  }

}
