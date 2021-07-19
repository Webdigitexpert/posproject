import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { CouponsService } from './../../shared/services/coupons/coupons.service';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {

  public applyCoupon: FormGroup
  public message: boolean = false;
  public enterCoupon: boolean = true;
  public couponDetails = {};
  public coupons:any
  public couponId
  public couponsDropDown: boolean =false
  public couponDetailsInput = {
    type: "text",
    placeholder: "",
  }

  constructor(private cuponsService: CouponsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService._cart$.subscribe(cart => {
      this.couponDetails = cart.coupon;
      this.couponDetails = cart.coupon;
    });
    this.applyCoupon = new FormGroup({
      coupon: new FormControl('')
    })
  }

  getCoupons(event) {
    console.log(event)
    this.cuponsService.searchCoupon(event.target.value).subscribe(res =>{
      console.log(res)
      this.coupons = res
    })
    this.couponsDropDown = true
  }

  addCoupon(data) {

    if (this.applyCoupon.get('coupon').valid) {
      const couponCode = this.applyCoupon.get('coupon').value;
      this.cuponsService.getCoupon(this.couponId).subscribe(res => {
        console.log(res)
        this.cartService.addCoupon(res);
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
