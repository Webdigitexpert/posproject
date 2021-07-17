import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-by-date',
  templateUrl: './search-by-date.component.html',
  styleUrls: ['./search-by-date.component.scss']
})
export class SearchByDateComponent implements OnInit {

  constructor() { }

  public fromDate = {
    type : "date",
  }
  public toDate = {
    type : "date",
  }

  ngOnInit(): void {
  }

}
