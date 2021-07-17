import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  public productsData = []
  public id
  public deleteCustomer
  public deleteCustomers
  public actions = {
    edit: true,
    delete: true,
  };

  public columns = [
    {
      label: 'Customer Id',
      field: '_id'
    },
    {
      label: 'Customer Name',
      field: 'customer_name',
    },
    {
      label: 'Customer Mobile',
      field: 'customer_mobile',
    },
    {
      label: 'Order Email',
      field: 'customer_email',
    },
    {
      label: 'Status',
      field: 'status'
    }
  ];

  ngOnInit(): void {
    this.customers();
  }
  customers() {
    this.customerService.getCustomers()
    .subscribe((customers) => {
      this.productsData = customers
      console.log(customers)
    })
  }
  
  editCustomerData(data: any) {
    this.customerService.updateCustomer(data._id).subscribe((res)=>{
      console.log(res)
    })
  }

}
