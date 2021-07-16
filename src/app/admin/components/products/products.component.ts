import { Component, Input, OnInit } from '@angular/core';
import { DialogServiceService } from '../../../shared/services/dialog/dialog-service.service';
import { AddProductComponent } from '../../shared/components/product/add-product.component';
import { DeleteComponent } from '../../../shared/components/delete/delete.component';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private dialogService: DialogServiceService,
    private productService: ProductsService
  ) {}

  public inputdata = {
    type: 'button',
    name: 'btn',
    class: 'btn btn-primary',
    value: 'Add New',
  };

  public actions = {
    edit: true,
    delete: true,
    add: true,
    view: true,
  };

  public columns = [
    {
      label: 'Name',
      field: 'product_name',
    },
    {
      label: 'Price',
      field: 'product_price',
    },
    {
      label: 'Description',
      field: 'product_description',
    },
    {
      label: 'Product Image',
      field: 'product_image',
    },
    {
      label: 'Status',
      field: 'status',
    },
  ];
  public productsData;
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (res) => {
        this.productsData = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  opendialog(data: any) {
    this.dialogService
      .openDialog(
        {
          title: 'Add Product',

          buttons: {
            add: 'Add',
            cancel: 'Cancel',
          },
          type: 'add',
          data: data,
        },
        AddProductComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
  deleteProduct(data: any) {
    console.log(data);
    this.dialogService
      .openDialog(
        {
          title: 'Delete Product',

          buttons: {
            delete: 'Delete',
            cancel: 'Cancel',
          },
          data: data,
          type: 'deleteProduct',
        },
        DeleteComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
  editProduct(data: any) {
    console.log(data);
    this.dialogService
      .openDialog(
        {
          title: 'Edit Product',

          buttons: {
            edit: 'Save',
            cancel: 'Cancel',
          },
          type: 'edit',
          data: data,
        },
        AddProductComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
  viewProduct(data: any) {
    console.log(data);
    this.dialogService
      .openDialog(
        {
          title: 'View Product',

          buttons: {
            cancel: 'Cancel',
          },
          type: 'view',
          data: data,
        },
        AddProductComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
}
