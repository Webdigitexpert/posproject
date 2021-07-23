import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {
  public fullScreen: boolean = true;
  public loaderShow: boolean = false;
  public loaderTemplate = environment.loaderTemplate;

  constructor(private customerService: CustomerService,
    private orderService: OrdersService) { }
  public orderDetailsData: any
  public actions = {
    edit: true,
    delete: true,
  };
  public columns = [
    {
      label: 'Customer Id',
      field: '_id',
    },
    {
      label: 'Name',
      field: 'customer_name',
    },
    {
      label: 'Mobile',
      field: 'customer_mobile',
    },
    {
      label: 'Email',
      field: 'customer_email',
    },
    {
      label: 'Status',
      field: 'status',
    },
  ];
  ngOnInit(): void {
    this.loaderShow = true;
    this.customers();

    this.customerService._customers$.subscribe((res) => {
      this.loaderShow = false;
      console.log(res);
      this.orderDetailsData = res;
    });
  }
  customers() {
    this.customerService.getCustomers().subscribe((customers) => {
      this.orderDetailsData = customers;
    });
  }


}
