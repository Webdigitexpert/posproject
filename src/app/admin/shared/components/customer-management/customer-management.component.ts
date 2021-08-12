import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';
import { constants } from 'src/constants/constants';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css'],
})
export class CustomerManagementComponent implements OnInit {
  constructor(private ngbModal:NgbActiveModal,private customerService:CustomerService) {}
  @Input() props: any;
  public title = null;
  public description = null;
  public type: string;
  public data: any;
  public customerId: string;
  public buttons:any;
  public customerForm: FormGroup;
  public loaderShow: boolean = false;
  public fullScreen: boolean = true;
  public loaderTemplate = constants.loaderTemplate;
  public address = {
    field:"Address"
  }

  public statusOptions = [{ state: 'Active' }, { state: 'Inactive' }];
  public customerName = { type: 'text' ,placeholder:'Customer Name',class:'form-control', field: 'Customer Name'};
  public customerMobile = { type: 'text' ,placeholder:'Customer Mobile',class:'form-control', field: 'Customer Mobile'};
  public customerEmail = { type: 'text' ,placeholder:'Customer Email',class:'form-control', field: 'Customer Email'};
  
  ngOnInit(): void {
    this.customerForm = new FormGroup({
      customer_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(2)
      ]),
      customer_email: new FormControl('', [
        Validators.required,
        Validators.minLength(50),
        Validators.minLength(5)
      ]),
      customer_mobile: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
      ]),
      customer_address: new FormControl('',[Validators.required,Validators.minLength(10),]),
      status: new FormControl('Active',[Validators.required])
    });
    this.setDialogProps(this.props);
  }

  setDialogProps(dialogdata: any) {
    console.log(dialogdata);
    this.type = dialogdata.type;
    this.data = dialogdata.data;
    this.customerId =
      // this.type === 'edit' || this.type === 'view' ? dialogdata.data._id : '';
      this.title = dialogdata.title;
    this.buttons = dialogdata.buttons;
    debugger;
    if (['edit', 'view'].includes(this.type)) {
      this.customerId = dialogdata.data._id;
      this.customerForm.patchValue(this.data);
    }
  }


  onCreate(){
    if(!this.customerForm.value.customer_name||!this.customerForm.value.customer_email||!this.customerForm.value.customer_mobile||!this.customerForm.value.customer_address){
      this.customerForm.markAllAsTouched()
      this.loaderShow = false;
    }
    else{
    this.loaderShow = true;
    this.customerService.postCustomer(this.customerForm.value).subscribe((res:any)=>{
      console.log(res)
      this.loaderShow = false;
      this.onCancel();
    },(err:any)=>{
      console.log(err)
    })
  }
  }

  onSave(){
    if(!this.customerForm.value.customer_name||!this.customerForm.value.customer_email||!this.customerForm.value.customer_mobile||!this.customerForm.value.customer_address){
      this.customerForm.markAllAsTouched()
      this.loaderShow = false;
    }
    else{
    this.loaderShow = true;
    this.customerService.editCustomer(this.customerId, this.customerForm.value).subscribe((res:any)=>{
      console.log(res);
      this.loaderShow = false;
      this.onCancel();
    },(err:any)=>{
      console.log(err)
    })
  }
  }


  onCancel() {
    this.ngbModal.close();
  }
}
