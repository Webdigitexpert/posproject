import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
  public data: any;
  public isInvoice: boolean;
  constructor(private ngbModal: NgbActiveModal) {}

  public loaderShow:boolean = false;
  public loaderTemplate =environment.loaderTemplate;
  public fullScreen :boolean=true; 

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

  ngOnInit(): void {
    debugger;
    this.setDialogProps(this.props);
  }

  setDialogProps(dialogdata: any) {
    debugger;
    console.log(dialogdata);
    this.type = dialogdata.type;
    this.data = dialogdata.data;

    this.title = dialogdata.title;
    this.buttons = dialogdata.buttons;
  }

  onCancel() {
    this.ngbModal.close();
  }

  Invoice() {
    this.isInvoice = true;
  }
}
