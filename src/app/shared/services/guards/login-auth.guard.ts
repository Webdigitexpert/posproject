import { utf8Encode } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const employeeDetails: any = this.authService.getEmployeeLoginDetails();
    debugger;
    if (this.authService.getEmployeeLoginDetails()) {
      this.router.navigate(['/home']);
    } else {
    this.router.navigate(['login']);
    }
    return true
  }
}
