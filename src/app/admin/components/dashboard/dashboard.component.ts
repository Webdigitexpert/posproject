import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private orderService: OrdersService) {}
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
  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      (res) => {
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
