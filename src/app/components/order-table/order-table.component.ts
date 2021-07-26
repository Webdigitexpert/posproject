import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  @Input() public items = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {}

  delete(item) {
    this.cartService.deleteCartItem(item);
  }

  updateQty(event, item) {
    this.cartService.updateQty(event, item);
  }

}
