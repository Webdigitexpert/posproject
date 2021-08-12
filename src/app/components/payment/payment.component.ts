import {
  Component,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';
import { constants } from 'src/constants/constants';
import { environment } from 'src/environments/environment';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { PaymentServiceService } from 'src/app/shared/services/payment-service/payment-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  stripeCardValid: boolean = false;
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  public payPalConfig?: IPayPalConfig;

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };
  get validForm() {
    return this.paymentForm.valid && this.stripeCardValid;
  }
  stripeTest: FormGroup;
  @Input() props: any;
  public title = null;
  public buttons: any;
  public type: string;
  public data;
  public btnDisabled: boolean = true;
  public paymentMethod: FormGroup;
  public showSuccess: any;
  public showCancel: any;
  public showError: any;
  public isInvoice: boolean;
  public coupon: boolean = false;
  public emptyCart:boolean =false;
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
  public cartData = JSON.parse(sessionStorage.getItem('cartData'));
  public loaderShow: boolean = false;
  public loaderTemplate = constants.loaderTemplate;
  public fullScreen: boolean = true;
  public orderData: any = sessionStorage.getItem('cartData');
  public employeeDetails: any;
  public orderDate;
  public employeeId;
  public orderId;
  public Total;
  public items;
  public couponName;
  public orders;
  public invoiceDetails: any;
  public print: ElementRef;
  public payments: any = 'Cash';
  public orderStatus: boolean = false;
  public stripeErrorMessage:string
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
    field: 'Payment method',
    list: ['Cash', 'Card', 'Paypal'],
    name: 'paymentType',
  };
  constructor(
    private ngbModal: NgbActiveModal,
    private authService: AuthService,
    private orderService: OrdersService,
    private cartService: CartService,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private paymentService:PaymentServiceService
  ) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      name: ['', [Validators.required]],
    });

    this.initConfig();
    this.setDialogProps(this.props);
    this.employeeDetails = this.authService.getEmployeeLoginDetails();
    console.log(this.employeeDetails);
    this.employeeId = this.employeeDetails.employee_id;
    this.data = sessionStorage.getItem('cartData');
    this.paymentMethod = new FormGroup({
      payment: new FormControl('', [Validators.required]),
    });
    console.log(this.paymentMethod.value);
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

  paymentOption(value) {
    //  console.log( this.cartData.total)
    this.payments = value;
    this.paymentMethod.setValue({
      payment: value,
    });
    this.btnDisabled = false;
  }

  Invoice() {
    this.isInvoice = true;
    this.data = JSON.parse(sessionStorage.getItem('cartData'));
    if (!this.data) {
      this.orderStatus = false;
    } else {
      this.orderStatus = true;
      console.log(this.data);
      console.log(this.data.total);
      this.orderService
        .postOrder({
          orderItems: this.data,
          order_amount: this.data.total,
          employee_id: this.employeeDetails.employee_id,
          coupon_code: this.data.coupon.coupon_name,
          coupon_discount: this.data.coupon.coupon_discount,
        })
        .subscribe((res: any) => {
          console.log(res);
          this.loaderShow = true;
          this.orderService
            .invoice(this.employeeDetails.employee_id)
            .subscribe((res: any) => {
              this.loaderShow = false;
              this.invoiceDetails = res;
              console.log(this.invoiceDetails);
              // this.orderDate = this.invoiceDetails.order_date_and_time;
              // this.orderId = this.invoiceDetails._id;
              // this.Total = this.invoiceDetails.order_amount;
              // console.log(this.Total)
              this.orders = this.invoiceDetails.orderItems;
              this.invoiceDetails &&
                this.invoiceDetails.map((invoiceDetail) => {
                  this.couponName = invoiceDetail.coupon_code;
                  this.orderDate = invoiceDetail.order_date_and_time;
                  this.orderId = invoiceDetail._id;
                  this.Total = invoiceDetail.order_amount;
                  console.log(this.Total)
                  this.items =
                    invoiceDetail.orderItems && invoiceDetail.orderItems.items;
                });
              this.cartService.removeCartFromStore();
            });
        });
    }
  }

  printPage() {
    window.print();
  }

  // createToken(): void {
  //   const name = this.stripeTest.get('name').value;
  //   this.stripeService
  //     .createToken(this.card.element, { name })
  //     .subscribe((result) => {
  //       if (result.token) {
  //         // Use the token
  //         console.log(result.token.id);
  //       } else if (result.error) {
  //         // Error creating the token
  //         console.log(result.error.message);
  //       }
  //     });
  // }
  // ------------------------------------Stripe-------------------------------------------------
  onChange({ type, event }) {
    if (type === 'change') {
      this.stripeCardValid = event.complete;
    }
  }

  buy() {
    this.stripeService
      .createToken(this.card.getCard(), { name: this.paymentForm.value.name })
      .subscribe((result) => {
        if (result && result.token && (this.cartData)) {
          console.log(result.token.id);
          console.log(this.Total)
          this.paymentService.createPayment({
          "amount": this.cartData.total/100,
          "currency": "INR",
          "token": result.token.id
        }).subscribe((res:any)=>{
            console.log(res)
            this.Invoice()
          })
        }
        else if (result.error) {
          this.stripeErrorMessage = result.error.message;
          console.log(result.error.message);
        }
      });
  }

  // ------------------------------------PayPal-------------------------------------------------
    private initConfig(): void {
      this.payPalConfig = {
          currency: 'USD',
          clientId: 'sb',
          createOrderOnClient: (data) => <ICreateOrderRequest> {
              intent: 'CAPTURE',
              purchase_units: [{
                  amount: {
                      currency_code: 'USD',
                      value: this.cartData.total ? this.cartData&&this.cartData.total : '',
                      breakdown: {
                          item_total: {
                              currency_code: 'USD',
                              value: this.cartData.total ? this.cartData&&this.cartData.total : '',
                          }
                      }
                  },
                  items: [{
                      name: 'Enterprise Subscription',
                      quantity: '1',
                      category: 'DIGITAL_GOODS',
                      unit_amount: {
                          currency_code: 'USD',
                          value:this.cartData.total ? this.cartData&&this.cartData.total : '',
                      },
                  }]
              }]
          },
          advanced: {
              commit: 'true'
          },
          style: {
              label: 'paypal',
              layout: 'horizontal',  //paypal buttons horizantal, vertical
              color: 'gold',
              tagline: false
          },
          onApprove: (data, actions) => {
              console.log('onApprove - transaction was approved, but not authorized', data, actions);
              actions.order.get().then(details => {
                  console.log('onApprove - you can get full order details inside onApprove: ', details);
                  this.Invoice()
              });

          },
          onClientAuthorization: (data) => {
              console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
              this.showSuccess = true;
          },
          onCancel: (data, actions) => {
              console.log('OnCancel', data, actions);
              this.showCancel = true;
          },
          onError: err => {
              console.log('OnError', err);
              this.showError = true;
          },
          onClick: (data, actions) => {
              console.log('onClick', data, actions);
              // this.resetStatus();
          },
      };
  }
}
