import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';
import { environment } from 'src/environments/environment';
import { Chart } from 'angular-highcharts';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { constants } from 'src/constants/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public orderDetailsData = [];
  public orderDetails;
  public employeeDetails: any;
  public id;
  public deleteCustomer;
  public deleteCustomers;
  public actions = {
    edit: true,
    delete: true,
  };
  public fullScreen: boolean = true;
  public loaderShow: boolean = false;
  public loaderTemplate = constants.loaderTemplate;
  public employeeSales: any;
  public ordersData = [];
  public orderDates = [];
  public orderamount = [];
  public date = []
  public chart: any;
  public employeeOrders = [];
  public toShortDate: any;
  public shortDate = [];
  public res = {};

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
      isText: true,
    },
    {
      label: 'Order Date',
      field: 'order_date_and_time',
      isDate: true,
    },
    {
      label: 'Order Amount',
      field: 'order_amount',
      isPrice: true,
    },
  ];

  constructor(
    private customerService: CustomerService,
    private orderService: OrdersService,
    private authService: AuthService
  ) { }



  ngOnInit(): void {
    this.customerService._customers$.subscribe((res) => {
      console.log(res);
      this.orderDetailsData = res;
    });
    this.employeeDetails = this.authService.getEmployeeLoginDetails();
    this.getEmployeeOrders();
  }

  getEmployeeOrders() {
    debugger;
    this.loaderShow = true;
    console.log(this.employeeDetails.employee_id);
    this.orderService
      .searchOrdersByEmployee(this.employeeDetails.employee_id)
      .subscribe((res: any) => {
        console.log(res);
        this.employeeOrders = res;
        this.loaderShow = false;
        this.ordersData = res;
        this.graphDetails(res);

      });
  }


  graphDetails(res) {
    const dataSet = {}
    res.forEach((element, index) => {
      const date = element.order_date_and_time.split('T')[0];
      dataSet[date] = dataSet[date] ? dataSet[date] + element.order_amount : element.order_amount;
    });
    const categories = [];
    const data = [];
    Object.keys(dataSet).forEach(element => {
      categories.push(element);
      data.push(dataSet[element]);
    });


    this.chart = new Chart({
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
        categories,
        title: {
          text: 'Order Dates',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Order Amount',
        },
      },

      series: [
        {
          type: 'column',
          data
        },
      ],
    });
  }



  editCustomerData(data: any) {
    this.customerService.updateCustomer(data._id).subscribe((res) => {
      console.log(res);
    });
  }


  getOrders(data) {
    this.orderDates = [];
    this.orderamount = [];
    if (!data.fromDate || !data.toDate) {
      this.getEmployeeOrders();
    }

    console.log(data);
    this.orderService
      .searchOrderByDatesandEmployee(
        this.employeeDetails.employee_id,
        data.fromDate,
        data.toDate
      )
      .subscribe((res) => {
        this.employeeSales = res;
        this.ordersData = res;
        this.graphDetails(res)
      });
  }

}


export interface SimpleDataModel {
  name: string;
  value: string;
  color?: string;
}