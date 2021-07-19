import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss']
})
export class TotalPriceComponent implements OnInit {

  public cartTotal = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService._cart$.subscribe(cart => {
      this.cartTotal = cart.total;
      console.log(cart.total, this.cartTotal)
    });
  }

}
