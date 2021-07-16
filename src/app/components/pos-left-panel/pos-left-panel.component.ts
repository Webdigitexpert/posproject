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


  constructor(public dialogService:DialogServiceService, private customerService:CustomerService) { }
  public external

  public searchCustomer: FormGroup


  ngOnInit(): void {
    this.searchCustomer = new FormGroup({
      customerData : new FormControl('')
    })
  }
  value ="hello"

  public customerDetails = {
    type: "search",
    placeholder: "Search Customer...",
  }
  addCustomers(data:any){
    this.dialogService.openDialog({
      title: "Add Cutomer",
      buttons: {
        add: "Add Customer",
        cancel: "Cancel",
      }
    },AddCustomerComponent).then((res: any) => {
      console.log(res)
    })
  }
  customerAdded(data:any){
    console.log("hello")
  } 
  getCustomer(data) {
    this.customerService.searchCustomer(data).subscribe((res)=>{
      console.log(data)
    })
  }

}
