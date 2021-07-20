import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';
import { DialogServiceService } from 'src/app/shared/services/dialog/dialog-service.service';
import { AddCustomerComponent } from '../../shared/components/add-customer/add-customer.component';

@Component({
  selector: 'app-pos-left-panel',
  templateUrl: './pos-left-panel.component.html',
  styleUrls: ['./pos-left-panel.component.scss']
})
export class PosLeftPanelComponent implements OnInit {

  public searchCustomer: FormGroup;
  public customerNames = []
  public customerName = ''
  public customerMobile = ''
  public customerEmail = ''
  public customers = []
  public customerId = []
  public allCustomers
  public customerDetails = {
    type: "search",
    placeholder: "Search Customer...",
  };

  constructor(public dialogService: DialogServiceService,
    private customerService: CustomerService) { }

  public customersData = ""

  ngOnInit(): void {
    this.getAllCustomers()
    this.searchCustomer = new FormGroup({
      customerData: new FormControl('')
    });
  }
  getData(data) {
    console.log(this.customers)
  }

  addCustomers(data: any) {
    this.dialogService.openDialog({
      title: "Add Cutomer",
      buttons: {
        add: "Add Customer",
        cancel: "Cancel",
      }
    }, AddCustomerComponent).then((res: any) => {
      console.log(res)
    })
  }

  getAllCustomers() {
    this.customerService.getCustomers().subscribe((res) => {
      this.customers = res
      this.customers.forEach((value) => {
        this.customerNames.push(value.customer_name)
      })
      console.log(this.customerNames)
    })
  }

  getCustomer(event) {
    if (event.target.value) {
      this.customerService.searchCustomer(event.target.value).subscribe((res) => {
        console.log(res)
        this.customerName = res[0].customer_name
        this.customerMobile = res[0].customer_mobile
        this.customerEmail = res[0].customer_email
      })
    }
  }

}
