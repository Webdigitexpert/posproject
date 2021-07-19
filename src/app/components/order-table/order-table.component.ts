import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  public items = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService._cart$.subscribe(res => {
      this.items = res.items;
    });
  }

  delete(item) {
    this.cartService.deleteCartItem(item);
  }

  updateQty(event, item) {
    this.cartService.updateQty(event, item);
  }

}
