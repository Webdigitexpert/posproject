import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {

  @Input() customerData
  @Input() customerTableHeadings
  @Input() actions: any;

  public delete_btn: boolean = false;
  public showActions: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

}
