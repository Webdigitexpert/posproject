import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public _cart$: Subject<any> = new Subject();

  // public _cart = {
  //   items: [],
  //   customer: {},
  //   coupon: {},
  //   total: 0
  // };

  constructor() { }

  getCart() {
    this._cart$.next(this.cart);
    console.log(this.cart)
  }

  set cart(cart) {
    this.updateCartTotal(cart);
    this.storeCart = cart;
    this.getCart();
  }

  get cart() {
    return JSON.parse(sessionStorage.getItem('cartData')) || {
      items: [],
      customer: {},
      coupon: {},
      total: 0
    };
  }

  set storeCart(cart) {
    sessionStorage.setItem('cartData', JSON.stringify(cart));
  }
  
  public removeCartFromStore() {
    sessionStorage.removeItem('cartData');
    this.getCart();
  }

  updateCartTotal(cart) {
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
        _item.qty = _item._id === item._id ? parseInt(event.target.value) : parseInt(_item.qty);
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
    return this.cart && this.cart.coupon && this.cart.coupon['coupon_name'];
  }

  setCustomer(customer) {
    const cart = this.cart;
    cart.customer = customer;
    this.cart = cart;
  }

}
