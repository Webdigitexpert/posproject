import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AdminSharedModule } from './shared/shared.module';
import { AdminRoutingModule } from './admin.routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgxLoaderModule } from '@tusharghoshbd/ngx-loader';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    CategoriesComponent,
    ProductsComponent,
    OrdersComponent,
    EmployeeComponent,
    CouponsComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    AdminRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
    AdminSharedModule,
    CommonModule,
    NgxLoaderModule,
  ],
  providers: [],
})
export class AdminModule {}
