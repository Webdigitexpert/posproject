import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CouponsService } from 'src/app/shared/services/coupons/coupons.service';
@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css'],
})
export class AddCouponComponent implements OnInit {
  @Input() props: any;
  public title = null;
  public description = null;
  public buttons: any;
  public type: string;
  public data: any;
  public couponId: string;
  public couponForm: FormGroup;
  public coupon_name = {
    type: 'text',
    placeholder: 'Coupon Code',
    class: 'form-control',
  };
  public statusOptions = [
    {
      state: 'Active',
    },
    {
      state: 'Inactive',
    },
  ];
  public coupon_description = {
    type: 'text',
    placeholder: 'Coupon Description',
    class: 'form-control',
  };
  public coupon_discount = {
    type: 'text',
    placeholder: 'Coupon Discount(%)',
    class: 'form-control',
  };

  constructor(
    public ngbModal: NgbActiveModal,
    private couponService: CouponsService
  ) {}

  ngOnInit(): void {
    this.couponForm = new FormGroup({
      coupon_name: new FormControl('', [Validators.required]),
      coupon_description: new FormControl('', [Validators.required]),
      coupon_discount: new FormControl('', [Validators.required]),
      coupon_status: new FormControl('test'),
    });
    this.setDialogProps(this.props);
  }

  setDialogProps(dialogdata: any) {
    console.log(dialogdata);
    this.type = dialogdata.type;
    this.data = dialogdata.data;
    this.couponId =
      this.type === 'edit' || this.type === 'view' ? dialogdata.data._id : '';
    this.title = dialogdata.title;
    this.buttons = dialogdata.buttons;
  }

  onCreate() {
    this.couponService.postCoupon(this.couponForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSave() {
    console.log(this.couponId);
    this.couponService
      .updateCoupon(this.couponId, this.couponForm.value)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onCancel() {
    this.ngbModal.close();
  }
}
