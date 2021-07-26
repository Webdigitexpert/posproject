import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss']
})
export class TotalPriceComponent implements OnInit {

  @Input() public cartTotal = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {}

}
