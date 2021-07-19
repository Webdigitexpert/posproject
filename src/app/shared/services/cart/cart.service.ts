import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public _cart$: Subject<any> = new Subject();

  public _cart = {
    items: [],
    customer: {},
    coupon: {},
    total: 0
  };

  constructor() { }

  set cart(cart) {
    this._cart = cart;
    this.updateCartTotal();
    this._cart$.next(this._cart);
  }

  get cart() {
    return this._cart;
  }

  updateCartTotal() {
    const cart = this.cart;
    let cartTotal = 0;
    cart.items.forEach(item => {
      cartTotal += item.qty * item.product_price;
    });
    if (cart.coupon && cart.coupon['coupon_discount']) {
      cart.coupon['coupon_discount_price'] = cartTotal * cart.coupon['coupon_discount'] / 100
      cartTotal -= cart.coupon['coupon_discount_price'];
    }
    cart.total = cartTotal;
  }

  setCartItem(item) {
    const cart = this.cart;
    const itemFound = cart.items.find(_item => _item._id === item._id);
    if (itemFound) {
      cart.items = cart.items.map(_item => {
        _item.qty = _item._id === item._id ? _item.qty + 1 : _item.qty;
        return _item;
      });
    } else {
      item.qty = 1;
      cart.items.push(item);
    }
    this.cart = cart;
  }

  deleteCartItem(item) {
    const cart = this.cart;
    const itemFound = cart.items.find(_item => _item._id === item._id);
    if (itemFound) {
      cart.items = cart.items.filter(_item => {
        return _item._id !== item._id;
      });
    }
    this.cart = cart;
  }

  updateQty(event, item) {
    const cart = this.cart;
    const itemFound = cart.items.find(_item => _item._id === item._id);
    if (itemFound) {
      cart.items = cart.items.map(_item => {
        _item.qty = _item._id === item._id ? event.target.value : _item.qty;
        return _item;
      });
    }
    this.cart = cart;
  }

  addCoupon(couponDetails) {
    const cart = this.cart;
    cart.coupon = couponDetails;
    this.cart = cart;
  }

  removeCoupon() {
    const cart = this.cart;
    cart.coupon = {};
    this.cart = cart;
  }

  isCouponActivated() {
    return this.cart.coupon && this.cart.coupon['coupon_name'];
  }

}
