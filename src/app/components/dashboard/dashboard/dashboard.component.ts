import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';
import { environment } from 'src/environments/environment';
import { Chart } from 'angular-highcharts';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private orderService: OrdersService,
    private authService: AuthService,

  ) { }

  public orderDetailsData = [];
  public orderDetails;
  public employeeDetails: any
  public id;
  public deleteCustomer;
  public deleteCustomers;
  public actions = {
    edit: true,
    delete: true,
  };
  public fullScreen: boolean = true;
  public loaderShow: boolean = false;
  public loaderTemplate = environment.loaderTemplate;
  public employeeSales: any;
  public ordersData=[]
  chart = new Chart({
    chart: {
      type: 'column',
    },
    title: {
      text: 'Total Sales',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'March', 'April', 'May'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total Orders',
      },
    },

    series: [
      {
        type: 'column',
        data: [1, 4, 1, 5, 6],
      },
    ],
  });
  data: SimpleDataModel[] = [
    {
      name: 'text1',
      value: '95',
    },
    {
      name: 'text1',
      value: '4',
    },
    {
      name: 'text3',
      value: '1',
    },
  ];

  // public columns = [
  //   {
  //     label: 'Customer Id',
  //     field: '_id',
  //   },
  //   {
  //     label: 'Name',
  //     field: 'customer_name',
  //   },
  //   {
  //     label: 'Mobile',
  //     field: 'customer_mobile',
  //   },
  //   {
  //     label: 'Email',
  //     field: 'customer_email',
  //   },
  //   {
  //     label: 'Status',
  //     field: 'status',
  //   },
  // ];
  public customerTableHeadings = [
    {
      label: 'Customer Id',
      field: '_id',
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
      field: 'status',
    },
  ];
  employeetableHeadings = [
    {
      label: 'Employee Name',
      field: 'employee_id',
      isText:true
    },
    {
      label: 'Order Date',
      field: 'order_date_and_time',
      isDate:true
    },
    {
      label: 'Order Amount',
      field: 'order_amount',
      isPrice: true,
    },
  ];

  ngOnInit(): void {
    


    this.customerService._customers$.subscribe((res) => {
      console.log(res);
      this.orderDetailsData = res;

    });
    this.employeeDetails = this.authService.getEmployeeLoginDetails()
    this.getEmployeeOrders()
  }

  getEmployeeOrders() {
    debugger
    console.log(this.employeeDetails.employee_id)
    this.orderService.searchOrdersByEmployee(this.employeeDetails.employee_id).subscribe((res: any) => {
      console.log(res)
      this.ordersData = res
    })
  }
  // customers() {
  //   this.customerService.getCustomers().subscribe((customers) => {
  //     this.orderDetailsData = customers;
  //   });
  // }

  editCustomerData(data: any) {
    this.customerService.updateCustomer(data._id).subscribe((res) => {
      console.log(res);
    });
  }
  getOrders(data) {
    console.log(data);
    this.orderService
      .searchOrderByDates(data.fromDate, data.toDate)
      .subscribe((res) => {
        this.employeeSales = res;
        this.ordersData =res
        console.log(res);
      });
  }
}
export interface SimpleDataModel {
  name: string;
  value: string;
  color?: string;
}
