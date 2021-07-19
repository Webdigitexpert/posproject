import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  @Input() price: number;
  public currencyFormat = environment.currencyFormat
  constructor() { }

  ngOnInit(): void {
  }

}
