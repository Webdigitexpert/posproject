import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btn_class:string
  @Input() btnDisabled:boolean

  constructor() { }

  ngOnInit(): void {
  }

}
