import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  @Input() props
  @Output() onEdit = new EventEmitter()

  public title:string = null
  public body:string = null
  public buttons


  // @Output() editCustomers = new EventEmitter()
  // @Output() cancel = new EventEmitter()

  public name ={
    type : 'text',
    placeholder : ''
  }

  public mobileNumber ={
    type : 'text',
    placeholder : ''
  }

  public email ={
    type : 'text',
    placeholder : ''
  }

  constructor(public ngbModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.setDialogProps(this.props)
  }

  setDialogProps(props: any) {
    this.title = props.title || 'no title';
    this.body = props.body ;
    this.buttons = props.buttons
    console.log(this.title)
  }
  onAction() {
    this.ngbModal.close();
  }

  edit() {
    this.onEdit.emit()
    this.ngbModal.close()
  }
  dismiss(){
    this.ngbModal.close()
  }

}
