import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() public details
  @Input() public class
  @Input() public isDataList:boolean = false
  @Input() public control: FormControl
  @Input() public dataLists
  constructor() { }

  ngOnInit(): void {
    
  }

}
