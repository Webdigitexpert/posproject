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
  public customerNames = [];
  public customers = [];
  public items = [];
  public couponDetails = {};
  public cartTotal = 0;

  public selectedCustomer = {
  }
  public customerDetails = {
    type: 'search',
    placeholder: 'Search Customer...',
  };
 

  constructor(public dialogService: DialogServiceService,
    private customerService: CustomerService,
    private cartService: CartService) { }


  ngOnInit(): void {

    this.searchCustomer = new FormGroup({
      customerData: new FormControl('')
    });

    this.searchCustomer.get('customerData').valueChanges.subscribe(res => {
      const customerDetails = res && res.split(' ');
      if (customerDetails && customerDetails.length === 3) {
        const customer = this.customers.find((value) =>
          value.customer_name == customerDetails[0] &&
          value.customer_mobile == customerDetails[1] &&
          value.customer_email == customerDetails[2]);
        if (customer) {
          this.setCustomer(customer);
          this.cartService.setCustomer(customer)
        }
      }
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
      this.customerNames.push(`${value.customer_name} ${value.customer_mobile} ${value.customer_email}`)
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
