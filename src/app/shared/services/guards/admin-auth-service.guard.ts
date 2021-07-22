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
export class AdminAuthServiceGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const adminDetails: any = this.authService.getLoginDetails();
    if (adminDetails && adminDetails.token && adminDetails.role == 'admin') {
      return true;
    } else {
      this.router.navigate(['/admin']);
      return false;
    }
  }
}
