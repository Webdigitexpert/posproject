import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AddCategoryComponent } from './components/category/add-category.component';
import { AddCouponComponent } from './components/coupon/add-coupon.component';
import { AddEmployeeComponent } from './components/employee/add-employee.component';
import { AddProductComponent } from './components/product/add-product.component';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TablesComponent } from './components/tables/tables.component';
import { CommonModule } from '@angular/common';
import { NgxLoaderModule } from '@tusharghoshbd/ngx-loader';

@NgModule({
  declarations: [
    AddCategoryComponent,
    AddCouponComponent,
    AddEmployeeComponent,
    AddProductComponent,

    HeaderComponent,
    SidebarComponent,
    TablesComponent,
  ],
  exports: [
    AddCategoryComponent,
    AddCouponComponent,
    AddEmployeeComponent,
    AddProductComponent,

    HeaderComponent,
    SidebarComponent,
    TablesComponent,
  ],
  imports: [SharedModule, RouterModule, CommonModule, ReactiveFormsModule,NgxLoaderModule],
  providers: [],
})
export class AdminSharedModule {}
