import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
   
  public applyCoupon : FormGroup  
  constructor() { }
  public message: boolean = false;
  public enterCoupon: boolean = true;

  public couponDetails = {
    type: "text",
    placeholder: "",
  }

  ngOnInit(): void {
    this.applyCoupon = new FormGroup({
      coupon : new FormControl('',[Validators.required])
    })
  }
  addCoupon() {
    this.message = true;
    this.enterCoupon = false;
  }
  cancel() {
    this.message = false;
    this.enterCoupon = true;
  }
}
