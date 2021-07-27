import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (environment.noAuthentication) {
      return true;
    } else {
      const employeeDetails: any = this.authService.getEmployeeLoginDetails();
      if (employeeDetails && employeeDetails.token && employeeDetails.role == 'employee') {
        return true;
      } else {
        this.router.navigate(['/login'])
        return false;
      }
    }

  }

}
