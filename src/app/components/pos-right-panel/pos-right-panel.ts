import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { CategoriesService } from '../../shared/services/categories/categories.service';
@Component({
  selector: 'app-pos-right-panel',
  templateUrl: './pos-right-panel.html',
  styleUrls: ['./pos-right-panel.scss']
})
export class PosRightPanelComponent implements OnInit {

  public categories
  public products
  public selectedCategory
  public search: boolean = false
  public id
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
  }

  searchBar() {
    this.search = !this.search
  }

  getProductsByCategoryId(id) {
    this.productsService.getProductByCategoryId(id).subscribe((products) => {
      this.products = products
    });
  }

  selectCategory(category) {
    this.selectedCategory = category
    this.id = category._id
    console.log(this.id)
    this.getProductsByCategoryId(category._id);
  }
}
