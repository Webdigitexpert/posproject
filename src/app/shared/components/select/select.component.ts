import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() selectData: any;
  @Input() key: any; // category_name

  @Input() control: FormControl;
  constructor() {}

  ngOnInit(): void {}
}
