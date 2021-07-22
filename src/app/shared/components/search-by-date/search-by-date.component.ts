import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-by-date',
  templateUrl: './search-by-date.component.html',
  styleUrls: ['./search-by-date.component.scss']
})

export class SearchByDateComponent implements OnInit {
  @Output() orders = new EventEmitter()
  public orderDetailsForm: FormGroup;

  constructor() { }

  public fromDate = {
    type : "date",
    placeholder: "yyyy-mm-dd"
  }
  public toDate = {
    type : "date",
    placeholder: "yyyy-mm-dd"
  }

  ngOnInit(): void {
    this.orderDetailsForm = new FormGroup({
      fromDate : new FormControl(''),
      toDate: new FormControl('')
    })
  }
  ordersList(data) {
    this.orders.emit(this.orderDetailsForm.value);
  }

}
