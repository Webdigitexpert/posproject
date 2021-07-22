import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CouponsService } from 'src/app/shared/services/coupons/coupons.service';
import { environment } from 'src/environments/environment';
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
  public loaderShow: boolean = false;
  public fullScreen: boolean = true;
  public loaderTemplate = environment.loaderTemplate;

  constructor(
    public ngbModal: NgbActiveModal,
    private couponService: CouponsService
  ) {}

  ngOnInit(): void {
    this.couponForm = new FormGroup({
      coupon_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      coupon_description: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      coupon_discount: new FormControl('', [
        Validators.required,
        Validators.maxLength(2),
      ]),
      coupon_status: new FormControl('Active'),
    });
    this.setDialogProps(this.props);
  }

  setDialogProps(dialogdata: any) {
    console.log(dialogdata);
    this.type = dialogdata.type;
    this.data = dialogdata.data;
    this.couponId =
      // this.type === 'edit' || this.type === 'view' ? dialogdata.data._id : '';
      this.title = dialogdata.title;
    this.buttons = dialogdata.buttons;
    debugger;
    if (['edit', 'view'].includes(this.type)) {
      this.couponId = dialogdata.data._id;
      this.couponForm.patchValue(this.data);
    }
  }

  onCreate() {
    this.loaderShow = true;
    this.couponService.postCoupon(this.couponForm.value).subscribe(
      (res) => {
        console.log(res);
        this.loaderShow = false;
        this.onCancel();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSave() {
    this.loaderShow = true;
    this.couponService
      .updateCoupon(this.couponId, this.couponForm.value)
      .subscribe(
        (res) => {
          this.loaderShow = false;
          this.onCancel();
        },
        (err) => {
          console.log(err);
        }
      );
    this.onCancel();
  }

  onCancel() {
    this.ngbModal.close();
  }
}
