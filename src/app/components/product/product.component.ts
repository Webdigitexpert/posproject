import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from 'src/app/dialogs/product-details/product-details.component';
import { DialogServiceService } from 'src/app/shared/services/dialog/dialog-service.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product

  constructor(public model: NgbModal, private dialogService: DialogServiceService, private productService: ProductsService) { }

  ngOnInit(): void {

  }
  getProduct(id) {

  }
  showDialog(data) {
    console.log(data)
    this.dialogService.openDialog({
      title: "Item Name",
      body: "Item Description",
      buttons: {
        add: "Add",
        cancel: "Cancel",
      },
      data: data
    }, ProductDetailsComponent).then((res: any) => {

      console.log(res)
    })
    this.productService.getProduct(data)
      .subscribe((product) => {
        console.log(product)
      })
  }

}
