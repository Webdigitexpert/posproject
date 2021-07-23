import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AdminSharedModule } from './shared/shared.module';
import { AdminRoutingModule } from './admin.routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgxLoaderModule } from '@tusharghoshbd/ngx-loader';
import { ChartModule } from 'angular-highcharts';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

import { AdminAuthServiceGuard } from '../shared/services/guards/admin-auth-service.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminInterceptor } from '../shared/interceptor/admin.interceptor';


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
    ReactiveFormsModule,
    ChartModule,
  ],
  providers: [AdminAuthServiceGuard,{ provide: HTTP_INTERCEPTORS, useClass: AdminInterceptor, multi: true },],
})
export class AdminModule {}
