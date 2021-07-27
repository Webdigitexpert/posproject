import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  public paymentMethod:FormGroup
  public isInvoice: boolean;
  public columns = [
    {
      label: 'product Name',
      field: 'product_name',
    },
    {
      label: 'Category Name',
      field: 'category_name',
    },
    {
      label: 'Price ',
      field: 'product_price',
    },
    {
      label: 'Quantity',
      field: 'qty',
    },
  ];
  constructor(private ngbModal: NgbActiveModal, 
    private authService: AuthService, 
    private orderService: OrdersService, 
    private cartService: CartService
    ) { }

  public loaderShow: boolean = false;
  public loaderTemplate = environment.loaderTemplate;
  public fullScreen: boolean = true;
  public orderData: any = sessionStorage.getItem('cartData')
  public employeeDetails: any
  public orderDate
  public employeeId
  public orderId
  public Total
  public items
  public couponName
  public orders
  public invoiceDetails: any
  public print: ElementRef
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
    this.paymentMethod = new FormGroup({
      cash:new FormControl('',[]),
      debitCard: new FormControl('',[],),
      creditCard:new FormControl('',[])
    })
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
    this.orderService.postOrder({
      orderItems: this.data,
      order_amount: this.data.total,
      employee_id: this.employeeDetails.employee_id,
      coupon_code: this.data.coupon.coupon_name,
      coupon_discount: this.data.coupon.coupon_discount,
    }).subscribe((res: any) => {
      console.log(res)
      this.orderService.invoice(this.employeeDetails.employee_id).subscribe((res: any) => {
        this.invoiceDetails = res
        console.log(this.invoiceDetails)
        this.orderDate = this.invoiceDetails.order_date_and_time
        this.orderId = this.invoiceDetails._id
        this.Total = this.invoiceDetails.order_amount
        this.orders = this.invoiceDetails.orderItems
        console.log(this.couponName)
        this.invoiceDetails && this.invoiceDetails.map(invoiceDetail => {
          console.log(invoiceDetail)
          debugger
          this.couponName = invoiceDetail.coupon_code
          this.orderDate = invoiceDetail.order_date_and_time
          this.orderId = invoiceDetail._id
          this.Total = invoiceDetail.order_amount
          this.items = invoiceDetail.orderItems && invoiceDetail.orderItems.items
          console.log(this.items)
        })
      });
    })
  }
  printPage() {
    window.print();
  }
}
