import { Component, OnInit } from '@angular/core';
import { DialogServiceService } from '../../../shared/services/dialog/dialog-service.service';
import { AddCouponComponent } from '../../shared/components/coupon/add-coupon.component';
import { DeleteComponent } from '../../../shared/components/delete/delete.component';
import { CouponsService } from 'src/app/shared/services/coupons/coupons.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css'],
})
export class CouponsComponent implements OnInit {
  constructor(
    private dialogService: DialogServiceService,
    private couponService: CouponsService
  ) {}
  public inputdata = {
    type: 'button',
    name: 'btn',
    class: 'btn btn-primary',
    value: 'Add New',
  };
  public actions = {
    edit: true,
    delete: true,
    add: true,
    view: true,
  };
  public gettype: any;
  public columns = [
    {
      label: 'Coupon Code',
      field: 'coupon_name',
    },
    {
      label: 'Coupon Description',
      field: 'coupon_description',
    },
    {
      label: 'Coupon Discount(%)',
      field: 'coupon_discount',
    },
    {
      label: 'Coupon Status',
      field: 'coupon_status',
    },
  ];

  public coupons;

  ngOnInit(): void {
    this.couponService.getCoupons().subscribe(
      (res) => {
        this.coupons = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.couponService._coupons$.subscribe((res)=>{
      this.coupons = res
    })
  }

  opendialog(data: any) {
    this.dialogService
      .openDialog(
        {
          title: 'Add Coupon',
          buttons: {
            add: 'Add',
            cancel: 'Cancel',
          },
          type: 'add',
        },
        AddCouponComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
  deleteCoupons(data: any) {
    console.log(data);
    this.dialogService
      .openDialog(
        {
          title: 'Delete Coupon',
          description: 'Delete Coupon Description',
          buttons: {
            delete: 'Delete',
            cancel: 'Cancel',
          },
          data: data,
          type: 'deleteCoupon',
        },
        DeleteComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
  editCoupons(data: any) {
    console.log(data);
    this.dialogService
      .openDialog(
        {
          title: 'Edit Coupon',
          description: 'Edit Coupon Description',
          buttons: {
            edit: 'Save',
            cancel: 'Cancel',
          },
          type: 'edit',
          data: data,
        },
        AddCouponComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
  viewCoupons(data: any) {
    console.log(data);
    this.dialogService
      .openDialog(
        {
          title: 'View Coupon',
          viewData: data,
          description: 'View Coupon Description',
          buttons: {
            cancel: 'Cancel',
          },
          type: 'view',
          data: data,
        },
        AddCouponComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
}
