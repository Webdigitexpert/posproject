import { Component, OnInit } from '@angular/core';
import { DialogServiceService } from '../../../shared/services/dialog/dialog-service.service';
import { DeleteComponent } from '../../../shared/components/delete/delete.component';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';
// import { EditOrderComponent } from '../../shared/components/edit-order/edit-order.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(
    private dialogService: DialogServiceService,
    private orderService: OrdersService
  ) {}
  public actions = {
    //edit: true,
    delete: true,
  };

  public columns = [
    {
      label: 'Order date',
      field: 'order_date_and_time',
    },
    {
      label: 'Order amount',
      field: 'order_amount',
    },
    {
      label: 'Employee Name',
      field: 'employee_id',
    },
    {
      label: 'Coupon Code',
      field: 'coupon_code',
    },
    {
      label: 'Coupon Discount',
      field: 'coupon_discount',
    },
    {
      label: 'Feedback',
      field: 'customer_feedback',
    },
  ];

  public orders;

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      (res) => {
        this.orders = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.orderService._orders$.subscribe(res =>{
      this.orders =res
    })
  }

  edit(data: any) {
    console.log('edit data', data);
    this.dialogService
      .openDialog(
        {
          title: 'Edit Order',
          description: 'Edit Order Description',
          buttons: {
            positive: 'Save',
            negative: 'Cancel',
          },
        },
        DeleteComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
  delete(data: any) {
    console.log('delete data', data);
    this.dialogService
      .openDialog(
        {
          title: 'Delete Order',

          buttons: {
            delete: 'Delete',
            cancel: 'Cancel',
          },
          data: data,
          type: 'deleteOrder',
        },
        DeleteComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
}
