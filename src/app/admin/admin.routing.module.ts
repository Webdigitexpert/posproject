import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminAuthServiceGuard } from '../shared/services/guards/admin-auth-service.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot_password', component: ForgotPasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminAuthServiceGuard],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AdminAuthServiceGuard],
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AdminAuthServiceGuard],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AdminAuthServiceGuard],
  },
  {
    path: 'coupons',
    component: CouponsComponent,
    canActivate: [AdminAuthServiceGuard],
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AdminAuthServiceGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
