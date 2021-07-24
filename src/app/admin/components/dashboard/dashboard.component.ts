import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';
import { environment } from 'src/environments/environment';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private orderService: OrdersService,
    private employeeService: EmployeeService
  ) { }
  public columns = [
    {
      label: 'Employee Name',
      field: 'employee_id',
      isText: true,
    },
    {
      label: 'Order Date',
      field: 'order_date_and_time',
      isDate: true,
    },
    {
      label: 'Order Amount',
      field: 'order_amount',
      isPrice: true,
    },
  ];
  public selectEmployee: any;

  public dashboardData: any;
  data: SimpleDataModel[] = [
    {
      name: 'text1',
      value: '95',
    },
    {
      name: 'text1',
      value: '4',
    },
    {
      name: 'text3',
      value: '1',
    },
  ];
  public loaderShow: boolean = false;
  public fullScreen: boolean = true;
  public loaderTemplate = environment.loaderTemplate;
  public fromdateSearch: any;
  public todateSearch: any;
  public searchForm: FormGroup;
  public chart: any;
  public employeeNames =[]
  public allEmployeesNames: any
  public ordersCount: any = [];
  public employeeSales =[]

  ngOnInit(): void {
    this.graphDetails()
    this.loaderShow = true;
    this.searchForm = new FormGroup({
      employee_id: new FormControl('All', []),
    });
    this.getAllEmployees()
    //orders count
    this.orderService.OrdersCount().subscribe(
      (res: any) => {
        console.log(res);
        this.chart = new Chart({
          chart: {
            type: 'column',
          },
          title: {
            text: 'Total Sales',
          },
          credits: {
            enabled: false,
          },
          xAxis: {
            categories: this.employeeNames,
            title: {
              text: 'Employee Names',
            },
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Total Orders',
            },
          },

          series: [
            {
              type: 'line',
              data: this.employeeSales,
            },
          ],
        });
      },
      (err: any) => {
        console.log(err);
      }
    );

    this.orderService.getOrders().subscribe(
      (res) => {
        this.loaderShow = false;
        this.dashboardData = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

  }

  //highcharts
  graphDetails() {
    this.orderService.OrdersCount().subscribe((res:any)=>{
      console.log(res)
      this.allEmployeesNames = res 
      this.allEmployeesNames.forEach(element => {
        this.employeeNames.push(element._id)
        this.employeeSales.push(element.count)
      });
    })
  }
  getOrders(data) {
    this.loaderShow = true;
    this.fromdateSearch = data.fromDate;
    this.todateSearch = data.toDate;
    this.orderService
      .searchOrderByDates(this.fromdateSearch, this.todateSearch)
      .subscribe(
        (res) => {
          console.log(res);
          this.dashboardData = res;
          this.loaderShow = false;
        },
        (err) => {
          console.log(err);
        }
      );
  }
  getAllEmployees() {
    this.employeeService.getEmployee().subscribe(
      (res) => {
        console.log(res);
        this.selectEmployee = res;
        this.selectEmployee.forEach(element => {
          // this.employeeNames.push(element.employee_name)
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  employeeSelect(event: any) {
    this.loaderShow = true;
    if (!this.fromdateSearch || !this.todateSearch) {
      if (this.searchForm.value.employee_id === 'All') {
        this.orderService.getOrders().subscribe(
          (res: any) => {
            console.log(res);
            
            this.dashboardData = res;
            this.loaderShow = false;
          },
          (err: any) => {
            console.log(err);
          }
        );
      } else {
        this.orderService
          .searchOrdersByEmployee(this.searchForm.value.employee_id)
          .subscribe(
            (res: any) => {
              this.loaderShow = false;
              this.dashboardData = res;
            },
            (err) => {
              console.log(err);
            }
          );
      }
    } else {
      if (this.searchForm.value.employee_id === 'All') {
        this.orderService
          .searchOrderByDates(this.fromdateSearch, this.todateSearch)
          .subscribe(
            (res) => {
              console.log(res);
              this.dashboardData = res;
              this.loaderShow = false;
            },
            (err) => {
              console.log(err);
            }
          );
      } else {
        this.orderService
          .searchOrderByDatesandEmployee(
            this.searchForm.value.employee_id,
            this.fromdateSearch,
            this.todateSearch
          )
          .subscribe(
            (res) => {
              console.log(res);
              this.loaderShow = false;
              this.dashboardData = res;
            },
            (err) => {
              console.log(err);
            }
          );
      }
    }
  }
  getAll(event: any) {
    console.log(event);
  }
}
export interface SimpleDataModel {
  name: string;
  value: string;
  color?: string;
}
