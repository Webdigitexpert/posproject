import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router) { }

  canActivate():boolean {

    return false
  }

}
