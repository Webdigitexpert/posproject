import { Component, OnInit } from '@angular/core';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';
import { DialogServiceService } from 'src/app/shared/services/dialog/dialog-service.service';
import { environment } from 'src/environments/environment';
import { CustomerManagementComponent } from '../../shared/components/customer-management/customer-management.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  constructor(private customerService: CustomerService,private dialogService: DialogServiceService) {}

  public loaderShow: boolean = false;
  public fullScreen: boolean = true;
  public loaderTemplate = environment.loaderTemplate;
  public customers:any;

  public actions = 
    {
      add:true,
      edit:true,
      view:true,
      delete:true,
    }
  ;
  public columns = [
    {
      label: 'Customer Name',
      field: 'customer_name',
      isText: true,
    },
    {
      label: 'Customer Mobile',
      field: 'customer_mobile',
      isText: true,
    },
    {
      label: 'Customer Email',
      field: 'customer_email',
      isText: true,
    },
    {
      label: 'Customer Status',
      field: 'status',
      isText: true,
    },
  ];

  ngOnInit(): void {
    this.loaderShow = true;
    this.customerService.getCustomers().subscribe(
      (res: any) => {
        console.log(res);
        this.customers = res;
        this.loaderShow =false;
      },
      (err: any) => console.log(err)
    );
    this.customerService._customers$.subscribe((res) => {
      this.customers = res;
    });
  }

  opendialog(data: any) {
    this.dialogService.openDialog({
      title: 'Add Customer',
      buttons:{
        add:'Add',
        cancel:'Cancel'
      },
      type:'add'
    },CustomerManagementComponent)
    console.log(data);
  }

  editCustomer(data:any) {
    console.log(data);
    this.dialogService.openDialog({
      title: 'Edit Customer',
      buttons:{
        edit:'Edit',
        cancel:'Cancel'
      },
      data:data,
      type:'edit'
    },CustomerManagementComponent)
    console.log(data);
  }

  viewCustomer(data:any) {
    console.log(data);
    this.dialogService.openDialog({
      title: 'View Customer',
      buttons:{
        cancel:'Cancel'
      },
      data:data,
      type:'view'
    },CustomerManagementComponent)
    console.log(data);
  }
  deleteCustomer(data:any) {
    console.log(data)
    this.dialogService.openDialog({
      title: 'Delete Customer',
      buttons:{
        delete:'Delete',
        cancel:'Cancel'
      },
      data:data,
      type:'deleteCustomer'
    },DeleteComponent)
    console.log(data);
  }


}
