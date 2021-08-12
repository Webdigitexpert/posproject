import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../../services/customers/customer.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { ProductsService } from '../../services/products/products.service';
import { EmployeeService } from '../../services/employee/employee.service';
import { CouponsService } from '../../services/coupons/coupons.service';
import { OrdersService } from '../../services/orders/orders.service';
import { environment } from 'src/environments/environment';
import { constants } from "../../../../constants/constants"
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  @Input() props

  public title = null;
  public description = null;
  public buttons: any;
  public deleteType: string;
  public customerId;
  public deleteItem: any
  public fullScreen: boolean = true;
  public loaderShow: boolean = false;
  public loaderTemplate = constants.loaderTemplate;
  public allCustomers =[]


  constructor(public ngbModal: NgbActiveModal,
    private customerService: CustomerService,
    private categoryService: CategoriesService,
    private productService: ProductsService,
    private employeeService: EmployeeService,
    private couponService: CouponsService,
    private orderService: OrdersService,
  ) { }

  ngOnInit(): void {
    
    this.setDialogProps(this.props)
  }

  setDialogProps(props: any) {
    this.deleteItem = props.data._id;
    this.title = props.title;
    this.description = props.description;
    this.buttons = props.buttons;
    this.deleteType = props.type;
    this.customerId = props.data._id
    
  }
  onAction() {
    this.ngbModal.close();
  }

  onCancel() {
    this.ngbModal.close();
  }

  // deleteCustomer() {
  //   console.log(this.customerId)
  //   this.customerService.deleteCustomer(this.customerId).subscribe((res) => {
  //     console.log(res)
  //   })
  //   this.ngbModal.close()
  // }

  delete() {
    this.loaderShow= true
    switch (this.deleteType) {
      case 'deleteCategory':
        this.categoryService.deleteCategory(this.deleteItem).subscribe(
          (res) => {
            console.log(res);
            this.loaderShow = false
          },
          (err) => {
            console.log(err);
          }
        );
        break;
      case 'deleteCoupon':
        this.couponService.deleteCoupon(this.deleteItem).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
        break;
      case 'deleteEmployee':
        this.employeeService.deleteEmployee(this.deleteItem).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
        break;
      case 'deleteOrder':
        this.orderService.deleteOrder(this.deleteItem).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
        break;
      case 'deleteProduct':
        this.productService.deleteProduct(this.deleteItem).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
        break;
      case 'deleteCustomer':
        this.customerService.deleteCustomer(this.deleteItem).subscribe((res) => {
          console.log(res)
          this.allCustomers = res
          console.log(this.allCustomers)
        })
    }
    this.onCancel() 
  }

}
