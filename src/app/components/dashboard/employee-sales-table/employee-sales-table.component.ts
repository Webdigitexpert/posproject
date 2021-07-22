import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-sales-table',
  templateUrl: './employee-sales-table.component.html',
  styleUrls: ['./employee-sales-table.component.scss'],
})
export class EmployeeSalesTableComponent implements OnInit {
  constructor() {}
  @Input() employeetableHeadings: any;
  @Input() employeeSales: any;

  ngOnInit(): void {}
}
