import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() selectData: any;
  @Input() key: any; // category_name
  @Input() type: any;
  @Input() select_value: any;
  @Input() all_select: any;

  @Input() control: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
