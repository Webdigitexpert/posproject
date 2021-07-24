import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogServiceService } from 'src/app/shared/services/dialog/dialog-service.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { environment } from 'src/environments/environment';
import { CategoriesService } from '../../shared/services/categories/categories.service';
import { PaymentComponent } from '../payment/payment.component';
@Component({
  selector: 'app-pos-right-panel',
  templateUrl: './pos-right-panel.html',
  styleUrls: ['./pos-right-panel.scss'],
})
export class PosRightPanelComponent implements OnInit {
  public categories;
  public showCategories: boolean = false;
  public products;
  public selectedCategory;
  public search: boolean = false;
  public id;
  public selected: boolean = false;
  public categoryList;
  public getCategorySearch: FormGroup;
  public searchDetails = {
    type: 'search',
    placeholder: 'Search Categories...',
  };
  public fullScreen: boolean = true;
  public loaderShow: boolean = false;
  public loaderTemplate = environment.loaderTemplate;
  public searchCategoryBy = '';
 
  constructor(
    private dialogService:DialogServiceService,
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.loaderShow = true;
    this.categoriesService.getCategories().subscribe((categories) => {
      this.loaderShow = false;
      this.categories = categories;
      this.selectedCategory = this.categories[0];
      console.log(categories);
      this.id = this.categories[0]._id;
      this.getProductsByCategoryId(this.selectedCategory._id);
    });
    this.getCategorySearch = new FormGroup({
      getCategory: new FormControl(''),
    });
  }

  getCategory(data) {
    console.log(data.target.value);
    this.searchCategoryBy = data.target.value;
  }

  searchBar() {
    this.search = !this.search;
  }

  getProductsByCategoryId(id) {
    this.productsService.getProductByCategoryId(id).subscribe((products) => {
      this.products = products;
    });
    // this.productsService.getProducts().subscribe((products) => {
    //   this.products = products
    // });
  }
  getProductsByCategory(data) {
    this.selectedCategory = data;
    console.log(this.selectedCategory);
    this.showCategories = false;
    this.selected = true;
  }

  selectCategory(category) {
    this.selectedCategory = category;
    this.id = category._id;
    console.log(this.id);
    this.getProductsByCategoryId(category._id);
  }

  proceedtoPay(data) {
    debugger
    this.dialogService.openDialog(
      {
        title: 'Confirm Payment',

        buttons: {
          confirm: 'Confirm',
          cancel: 'Cancel',
        },
        type: 'payment',
        data: data,
      },
      PaymentComponent
    );
  }
}
