import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PosComponent } from './components/pos/pos.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { AuthServiceGuard } from './shared/services/guards/auth-service.guard';
import { EmployeeForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: PosComponent, canActivate: [AuthServiceGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthServiceGuard] },
  { path: 'forget-password', component: EmployeeForgetPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
