import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { EditCustomerComponent } from 'src/app/shared/components/edit-customer/edit-customer.component';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';
import { DialogServiceService } from 'src/app/shared/services/dialog/dialog-service.service';

@Component({
  selector: 'app-order-details-table',
  templateUrl: './order-details-table.component.html',
  styleUrls: ['./order-details-table.component.scss']
})
export class OrderDetailsTableComponent implements OnInit {
  public edit_btn: boolean = false;
  public delete_btn: boolean = false;
  public showActions: boolean = false;

  @Input() data: any[];
  @Input() tableHeadings: any;
  @Input() actions: any;
  

  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor(public model: NgbModal, private dialogService: DialogServiceService) { }


  ngOnInit(): void {
    this.showActions = !!Object.keys(this.actions).length;
  }

  deleteCustomer(data: any) {
    this.dialogService.openDialog({
      title: "Customer Name",
      body: "",
      buttons: {
        delete: "Delete Customer",
        cancel: "Cancel",
      },
      type:'deleteCustomer',
      data:data
    }, DeleteComponent)
    console.log(data)
  }


}
