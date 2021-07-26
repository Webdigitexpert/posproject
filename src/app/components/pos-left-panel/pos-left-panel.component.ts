import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/shared/services/cart/cart.service';
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
  public selectedCustomer = {
  }
  public customerDetails = {
    type: 'search',
    placeholder: 'Search Customer...',
  };
  public customersData = '';
  public items = [];
  public couponDetails = {};
  public cartTotal = 0;

  constructor(public dialogService: DialogServiceService,
    private customerService: CustomerService,
    private cartService: CartService) { }


  ngOnInit(): void {
    this.searchCustomer = new FormGroup({
      customerData: new FormControl('')
    });
    
    this.searchCustomer.get('customerData').valueChanges.subscribe(res => {
      console.log(res)
    })

    this.customerService.getCustomers().subscribe((res) => {
      this.customers = res;
      this.getAllCustomers();
    })
    this.customerService._customers$.subscribe(res => {
      this.customers = res;
      this.getAllCustomers();
    });
    this.cartService._cart$.subscribe(cart => {
      debugger
      if (cart) {
        this.setCustomer(cart.customer);
        this.items = cart.items;
        this.couponDetails = cart.coupon;
        this.cartTotal = cart.total;
      }
     
    });
    
    this.cartService.getCart();

  }

  addCustomers(data: any) {
    this.dialogService.openDialog({
      title: "Add Cutomer",
      buttons: {
        add: "Add Customer",
        cancel: "Cancel",
      }
    }, AddCustomerComponent).then((res: any) => {
    })
  }

  getAllCustomers() {
    this.customers.forEach((value) => {
      this.customerNames.push(`${value.customer_name}  ${value.customer_mobile}  ${value.customer_email}`)
    });
  }

  setCustomer(customer) {
    if (customer) {
      this.selectedCustomer = customer;
    } else {
      this.selectedCustomer = {};
    }
  }

}
