import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  @Input() props: any;
  public title = null;
  public buttons: any;

  public type: string;
  public data: string;
  public productForm: FormGroup;
  public productId: string;
  public categoryOptions: any;
  public prod_name = {
    type: 'text',
    placeholder: 'Product Name',
    class: 'form-control',
  };
  public statusOptions = [
    {
      state: 'Active',
    },
    {
      state: 'Inactive',
    },
  ];
  public prod_id = {
    type: 'text',
    placeholder: 'Product ID',
    class: 'form-control',
  };
  public prod_price = {
    type: 'text',
    placeholder: 'Product Price',
    class: 'form-control',
  };
  public prod_image = {
    type: 'file',
    placeholder: 'Product Image',
  };
  public prod_description = {
    type: 'text',
    placeholder: 'Product Description',
    class: 'form-control',
  };
  public prod_status = {
    type: 'text',
    placeholder: 'Product Status',
    class: 'form-control',
  };

  public action_btns = {
    type: 'button',
    class: 'btn btn-outline-dark',
    value: 'Btn',
  };
  constructor(
    public ngbModal: NgbActiveModal,
    private categoryService: CategoriesService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      this.categoryOptions = res;
      console.log(res);
    });

    this.productForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productPrice: new FormControl('', [Validators.required]),
      productImage: new FormControl(),
      productDescription: new FormControl(),
      productStatus: new FormControl(),
      productCategory: new FormControl(),
    });
    this.setDialogProps(this.props);
  }

  setDialogProps(dialogdata: any) {
    console.log(dialogdata);
    this.type = dialogdata.type;
    this.data = dialogdata.data;
    this.productId =
      this.type === 'edit' || this.type === 'view' ? dialogdata.data._id : '';
    this.title = dialogdata.title;
    this.buttons = dialogdata.buttons;
  }
  onCreate() {
    this.productService.postProduct(this.productForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onUpdate() {
    this.productService
      .updateProduct(this.productId, this.productForm.value)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    console.log(this.productForm.value);
  }

  onCancel() {
    this.ngbModal.close();
  }
}
