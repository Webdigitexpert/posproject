import { Component, OnInit, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  public dataListID: string = '';


  ngOnInit(): void {
    // this.control.valueChanges.subscribe(res => {
    //   console.log(res)
    // })
  debugger
    console.log(this.control)
    this.dataListID = this.isDataList ? `datalistid${Math.random()}` : '';
  }

}
