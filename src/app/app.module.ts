import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PosRightPanelComponent } from './components/pos-right-panel/pos-right-panel';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { CardComponent } from './components/card/card.component';
import { PosLeftPanelComponent } from './components/pos-left-panel/pos-left-panel.component';
import { ProductDetailsComponent } from './dialogs/product-details/product-details.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { TotalPriceComponent } from './components/total-price/total-price.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component'
import { CouponComponent } from './components/coupon/coupon.component';
import { OrderDetailsTableComponent } from './components/dashboard/order-details-table/order-details-table.component';
import { DiscountComponent } from './components/discount/discount.component';
import { SearchByDateComponent } from '../../src/app/components/dashboard/search-by-date/search-by-date.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { PosComponent } from './components/pos/pos.component';
import { CustomerFilterPipe } from './customer-filter.pipe';
import { CustomerOrdersComponent } from './components/dashboard/customer-orders/customer-orders.component';


@NgModule({
  declarations: [
    PosRightPanelComponent,
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CardComponent,
    PosLeftPanelComponent,
    ProductDetailsComponent,
    CustomerDetailsComponent,
    OrderTableComponent,
    TotalPriceComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    CouponComponent,
    OrderDetailsTableComponent,
    DiscountComponent,
    SearchByDateComponent,
    EmployeeManagementComponent,
    PosComponent,
    CustomerFilterPipe,
    CustomerOrdersComponent,
  
  ],
  imports: [
    AppRoutingModule,
    NgbModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
