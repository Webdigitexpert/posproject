import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const employeeDetails = this.authService.getEmployeeLoginDetails();
    const adminDetails = this.authService.getAdminDetails();
    let token = '';
    if (employeeDetails && employeeDetails.token) {
      token = employeeDetails.token;
    } else if (adminDetails && adminDetails.token) {
      token = adminDetails.token;
    }
    let setHeader = {};
    if (!request.url.includes('/login')) {
     
      setHeader = {
        Authorization: `Bearer ${token}`,
      };
    }
    const modified = request.clone({
      headers: new HttpHeaders(setHeader),
    });
    return next.handle(modified).pipe(
      catchError((error) => {
        if (error.statusText === 'Unauthorized') {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
        console.log(error);
        return of(error);
      })
    );
  }
  
}
