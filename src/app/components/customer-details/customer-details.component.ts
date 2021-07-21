import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customerDetails
  // @Input() customerMobile
  // @Input() customerEmail
 

  constructor() { }

  ngOnInit(): void {

  }

}
