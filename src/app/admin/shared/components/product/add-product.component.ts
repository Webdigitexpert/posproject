import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  @Input() props: any;
  public title = null;
  public buttons: any;
  public imageUrl = environment.imageUrl;
  public type: string;
  public data: any;
  public productForm: FormGroup;
  public productId: string;
  public categoryOptions: any;
  public image: File;
  public loaderShow: boolean = false;
  public fullScreen: boolean = true;
  public loaderTemplate = environment.loaderTemplate;

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
    this.loaderShow = true;
    this.categoryService.getCategories().subscribe((res) => {
      this.categoryOptions = res;
      this.loaderShow = false;
      console.log(res);
    });

    this.productForm = new FormGroup({
      product_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
      ]),
      category_id: new FormControl('', [Validators.required]),
      product_price: new FormControl('', [
        Validators.required,
        Validators.maxLength(8),
        Validators.pattern(''),
      ]),
      // product_image: new FormControl('', [
      //   Validators.required,
      //   Validators.maxLength(8),
      // ]),
      product_description: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      status: new FormControl('', [Validators.required]),
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
    if (['edit', 'view'].includes(this.type)) {
      this.productId = dialogdata.data._id;
      this.productForm.patchValue(this.data);
    }
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
      console.log(this.image);
    }
  }

  onCreate() {
    this.loaderShow = true;
    this.productService
      .postProduct(this.productForm.value, this.image)
      .subscribe(
        (res) => {
          this.loaderShow = false;
          this.onCancel();
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onUpdate() {
    debugger;
    this.loaderShow = true;
    this.productService
      .updateProduct(this.productId, this.productForm.value, this.image)
      .subscribe(
        (res) => {
          this.loaderShow = false;
          this.onCancel();
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
