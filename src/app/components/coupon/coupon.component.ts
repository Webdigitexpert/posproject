import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { CouponsService } from './../../shared/services/coupons/coupons.service';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {

  @Input() public couponDetails = {};
  public applyCoupon: FormGroup
  public message: boolean = false;
  public enterCoupon: boolean = true;
  public coupons:any
  public couponId
  public couponsDropDown: boolean =false
  public couponDetailsInput = {
    type: "text",
    placeholder: "",
  }

  constructor(private cuponsService: CouponsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.applyCoupon = new FormGroup({
      coupon: new FormControl('')
    })
  }

  getCoupons(event) {
    if(event.target.value == null) {
      this.couponsDropDown = false
    }
    console.log(event)
    this.cuponsService.searchCoupon(event.target.value).subscribe(res =>{
      console.log(res)
      this.coupons = res
    })
    this.couponsDropDown = true
  }

  addCoupon() {
    debugger
    if (this.applyCoupon.get('coupon').valid) {
      debugger
      const couponCode = this.applyCoupon.get('coupon').value;
      this.cuponsService.searchCoupon(couponCode).subscribe(res => {
        this.cartService.addCoupon(res[0]);
        this.applyCoupon.get('coupon').setValue('');
      });
    }
    this.couponsDropDown = false
  }
  apply(data:any) {
    console.log(data)
        this.applyCoupon.setValue({
          coupon:data.coupon_name
        })
        this.couponId = data._id
  }

  removeCoupon() {
    this.cartService.removeCoupon();
  }
  isCouponActivated() {
    return this.cartService.isCouponActivated();
  }
}
