import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private orderService: OrdersService) {}
  public columns = [
    {
      label: 'Employee Name',
      field: 'employee_id',
      isText: true,
    },
    {
      label: 'Order Date',
      field: 'order_date_and_time',
      isText: true,
    },
    {
      label: 'Order Amount',
      field: 'order_amount',
      isPrice: true,
    },
  ];
  // public actions = {
  //   // edit: true,
  //   delete: true,
  //   // add: true,
  //   // view: true,
  // };

  public dashboardData: any;
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
  public loaderShow: boolean = false;
  public fullScreen: boolean = true;
  public loaderTemplate = environment.loaderTemplate;

  ngOnInit(): void {
    this.loaderShow = true;
    this.orderService.getOrders().subscribe(
      (res) => {
        this.loaderShow = false;
        this.dashboardData = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
export interface SimpleDataModel {
  name: string;
  value: string;
  color?: string;
}
