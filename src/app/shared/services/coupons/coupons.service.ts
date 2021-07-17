import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  public basePath = environment.basePath;
  public _coupons;
  public _coupons$: Subject<any> = new Subject();

  constructor(private http: HttpService) { }
  
  set coupons(coupons) {
    this._coupons = coupons;
    this._coupons$.next(this._coupons);
  }

  getCoupons(): Observable<any> {
    const url = `${this.basePath}coupons`;
    return this.http.get(url, this.http.headers).pipe(tap(res => {
      this.coupons = res
    }));;
  }

  postCoupon(payload:any): Observable<any> {
    const url = `${this.basePath}coupon`;
    return this.http.post(url,payload, this.http.headers)
    .pipe(
      tap(res => {
        this.coupons = res.coupons
      })
    );;
  }

  updateCoupon(id:any,payload:any): Observable<any> {
    const url = `${this.basePath}coupon/${id}`;
    return this.http.put(url,payload, this.http.headers)
    .pipe(
      tap(res => {
        this.coupons = res.coupons
      })
    );;
  }

  deleteCoupon(payload:any): Observable<any> {
    const url = `${this.basePath}coupon/${payload}`;
    return this.http.delete(url, this.http.headers)
    .pipe(
      tap(res => {
        this.coupons = res.coupons
      })
    );;
  }

  getCoupon(payload:any): Observable<any> {
    const url = `${this.basePath}coupon/${payload}`;    
    return this.http.delete(url, this.http.headers);
  }

}
