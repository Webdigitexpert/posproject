import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-type',
  templateUrl: './input-type.component.html',
  styleUrls: ['./input-type.component.scss'],
})
export class InputTypeComponent implements OnInit {
  @Input() public control: FormControl;
  @Input() public data;
  @Input() public input_class: string;
  @Input() public isDataList: boolean = false;
  @Input() public dataListOptions
  @Output() public details = new EventEmitter();
  @Output() public formValue = new EventEmitter();
  public dataListID: string = '';


  ngOnInit(): void {
    this.dataListID = this.isDataList ? `datalistid${Math.random()}` : '';
  }
  getDetails(data) {
    this.details.emit(data)
  }

  change($event) {
    
  }

  setValue(value) {
    console.log(value)
    this.formValue.emit(value)
    // this.control.setValue(value);
  }

}
