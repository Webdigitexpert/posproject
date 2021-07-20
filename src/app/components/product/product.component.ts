import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from 'src/app/dialogs/product-details/product-details.component';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { DialogServiceService } from 'src/app/shared/services/dialog/dialog-service.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product
  public imageUrl = environment.imageUrl

  constructor(public model: NgbModal, private dialogService: DialogServiceService, private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {

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
    }, ProductDetailsComponent)
    
    this.productService.getProduct(data)
      .subscribe((product) => {
        console.log(product)
      })
  }

  addItem(product) {
    this.cartService.setCartItem(product);
  }

}
