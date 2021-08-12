import { Component, Input, OnInit } from '@angular/core';
import { DialogServiceService } from '../../../shared/services/dialog/dialog-service.service';
import { AddProductComponent } from '../../shared/components/product/add-product.component';
import { DeleteComponent } from '../../../shared/components/delete/delete.component';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { environment } from 'src/environments/environment';
import { constants } from 'src/constants/constants';

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

  public loaderShow: boolean = false;
  public loaderTemplate: any = constants.loaderTemplate;
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
      isText: true,
    },
    {
      label: 'Price',
      field: 'product_price',
      isPrice: true,
    },
    {
      label: 'Category',
      field: 'category_name',
      isText: true,
    },
    {
      label: 'Description',
      field: 'product_description',
      description:true
    },
    {
      label: 'Product Image',
      field: 'product_image',
      isImage: true,
    },
    {
      label: 'Status',
      field: 'status',
      isText: true,
    },
  ];
  public productsData;
  ngOnInit(): void {
    this.loaderShow = true;
    this.productService.getProducts().subscribe(
      (res) => {
        this.productsData = res;
        console.log(res);
        this.loaderShow = false;
      },
      (err) => {
        console.log(err);
      }
    );
    this.productService._products$.subscribe((res) => {
      this.productsData = res;
    });
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
