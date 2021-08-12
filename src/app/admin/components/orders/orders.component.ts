import { Component, OnInit } from '@angular/core';
import { DialogServiceService } from '../../../shared/services/dialog/dialog-service.service';
import { DeleteComponent } from '../../../shared/components/delete/delete.component';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';
import { environment } from 'src/environments/environment';
import { constants } from 'src/constants/constants';
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
  public loaderShow: boolean = false;
  public loaderTemplate: any = constants.loaderTemplate;

  public actions = {
    //edit: true,
    delete: true,
  };

  public columns = [
    {
      label: 'Order date',
      field: 'order_date_and_time',
      isDate: true,
    },
    {
      label: 'Order amount',
      field: 'order_amount',
      isPrice: true,
    },
    {
      label: 'Employee Name',
      field: 'employee_id',
      isText: true,
    },
    {
      label: 'Coupon Code',
      field: 'coupon_code',
      isText: true,
      isCoupon:true
    },
    {
      label: 'Coupon Discount',
      field: 'coupon_discount',
      isText: true,
      isCoupon:true
    },
    // {
    //   label: 'Feedback',
    //   field: 'customer_feedback',
    //   isText: true,
    // },
  ];

  public orders;

  ngOnInit(): void {
    this.loaderShow = true;
    this.orderService.getOrders().subscribe(
      (res) => {
        this.orders = res;
        this.loaderShow = false;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.orderService._orders$.subscribe((res) => {
      this.orders = res;
    });
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
