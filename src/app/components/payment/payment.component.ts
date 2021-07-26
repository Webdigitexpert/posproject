import { collectExternalReferences } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  @Input() props: any;
  public title = null;
  public buttons: any;
  public type: string;
  public data;
  public isInvoice: boolean;
  constructor(private ngbModal: NgbActiveModal, private authService: AuthService, private orderService: OrdersService, private cartService: CartService) { }

  public loaderShow: boolean = false;
  public loaderTemplate = environment.loaderTemplate;
  public fullScreen: boolean = true;
  public orderData: any = sessionStorage.getItem('cartData')
  public employeeDetails: any
  public orderDate
  public employeeId
  public orderId
  public Total
  public orders=[]
  public invoiceDetails:any
  public paymentOptions = [
    {
      state: 'Credit Card',
    },
    {
      state: 'Cash',
    },
  ];

  public cash = {
    type: 'radio',
    class: 'form-control',
  };
  public debitCard = {
    type: 'radio',
    class: 'form-control',
  };
  public creditCard = {
    type: 'radio',
    class: 'form-control',
  };
  public referenceNumber = {
    type: 'text',
    class: 'form-control',
  }

  ngOnInit(): void {
    this.setDialogProps(this.props);
    this.employeeDetails = this.authService.getEmployeeLoginDetails()
    console.log(this.employeeDetails)
    this.employeeId = this.employeeDetails.employee_id
    this.data = sessionStorage.getItem('cartData')
    this.Invoice()
  }

  setDialogProps(dialogdata: any) {
    this.type = dialogdata.type;
    this.data = dialogdata.data;

    this.title = dialogdata.title;
    this.buttons = dialogdata.buttons;
  }

  onCancel() {
    this.ngbModal.close();
  }

  Invoice() {
    this.isInvoice = true
    this.data = JSON.parse(sessionStorage.getItem('cartData'))
    console.log(this.data)
     console.log(this.data.total)
     this.orderService.postOrder({ orderItems: this.data,
      order_amount: this.data.total,
      employee_id: this.employeeDetails.employee_id,
      coupon_code: this.data.coupon.coupon_name,
      coupon_discount: this.data.coupon.coupon_discount,
      }).subscribe((res:any)=>{
       console.log(res)
       this.orderService.invoice(this.employeeDetails.employee_id).subscribe((res:any)=>{
        console.log(res)
        this.invoiceDetails = res[0]
        this.orderDate = this.invoiceDetails.order_date_and_time
        this.orderId = this.invoiceDetails._id
        this.Total = this.invoiceDetails.order_amount
        console.log(this.invoiceDetails)
      console.log(this.invoiceDetails.orderItems)
      this.orders = this.invoiceDetails.orderItems
        console.log(this.orders)
        this.orders.forEach(ele=>{
          console.log(ele.product_name)
        })
        });
      })
    
  // }
  }

}
