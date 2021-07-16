import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  public basePath = environment.basePath;

  constructor(private http: HttpService) { }

  getCoupons(): Observable<any> {
    const url = `${this.basePath}coupons`;
    return this.http.get(url, this.http.headers);
  }

  postCoupon(payload:any): Observable<any> {
    const url = `${this.basePath}coupon`;
    return this.http.post(url,payload, this.http.headers);
  }

  updateCoupon(id:any,payload:any): Observable<any> {
    const url = `${this.basePath}coupon/${id}`;
    return this.http.put(url,payload, this.http.headers);
  }

  deleteCoupon(payload:any): Observable<any> {
    const url = `${this.basePath}coupon/${payload}`;
    return this.http.delete(url, this.http.headers);
  }

  getCoupon(payload:any): Observable<any> {
    const url = `${this.basePath}coupon/${payload}`;    return this.http.delete(url, this.http.headers);
  }

}
