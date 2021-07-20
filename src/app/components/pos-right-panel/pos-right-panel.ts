import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { CategoriesService } from '../../shared/services/categories/categories.service';
@Component({
  selector: 'app-pos-right-panel',
  templateUrl: './pos-right-panel.html',
  styleUrls: ['./pos-right-panel.scss']
})
export class PosRightPanelComponent implements OnInit {

  public categories
  public showCategories:boolean = false
  public products
  public selectedCategory
  public search: boolean = false
  public id
  public selected:boolean = false
  public categoryList
  public getCategorySearch: FormGroup
  public searchDetails = {
    type: "search",
    placeholder: "Search Categories...",
  }

  constructor(private categoriesService: CategoriesService, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories
      this.selectedCategory = this.categories[0];
      console.log(categories);
      this.id = this.categories[0]._id
      this.getProductsByCategoryId(this.selectedCategory._id);
    });
    this.getCategorySearch = new FormGroup({
      getCategory : new FormControl('')
    })
  }

  getCategory(data) {
    console.log(data.target.value)
    this.categoriesService.searchCategory(data.target.value).subscribe((res)=>{
      console.log(res)
     this.categoryList = res
     this.showCategories = true
    })
  }

  searchBar() {
    this.search = !this.search
  }

  getProductsByCategoryId(id) {
    this.productsService.getProductByCategoryId(id).subscribe((products) => {
      this.products = products
    });
    // this.productsService.getProducts().subscribe((products) => {
    //   this.products = products
    // });
  }
  getProductsByCategory(data) {
    this.selectedCategory = data
    console.log(this.selectedCategory)
    this.showCategories = false
    this.selected = true
      
  }

  selectCategory(category) {
    this.selectedCategory = category
    this.id = category._id
    console.log(this.id)
    this.getProductsByCategoryId(category._id);
  }
}
