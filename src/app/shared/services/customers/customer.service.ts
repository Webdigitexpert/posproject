import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})


export class CustomerService {

  public _customers;
  public _customers$: Subject<any> = new Subject();
  public basePath = environment.basePath;

  constructor(private http: HttpService) { }

  set customers(customers) {
    this._customers = customers;
    this._customers$.next(this._customers);
  }
  get customers() {
    return this._customers;
  }


  getCustomers(): Observable<any> {
    const url = `${this.basePath}customers`;
    return this.http.get(url, this.http.headers).pipe(tap(res => {
      this.customers = res
    }));;
  }

  postCustomer(payload: any): Observable<any> {
    const url = `${this.basePath}customer/`;
    return this.http.post(url, payload, this.http.headers)
    .pipe(
      tap(res => {
        this.customers= res.customers;
      })
    );
  }

  updateCustomer(payload: any): Observable<any> {
    const url = `${this.basePath}customer/${payload}`;
    return this.http.put(url, payload, this.http.headers)
    .pipe(
      tap(res => {
        this.customers= res.customers;
      })
    );;
  }

  deleteCustomer(payload: any): Observable<any> {
    const url = `${this.basePath}customer/${payload}`;
    return this.http.delete(url, this.http.headers).pipe(
      tap(res => {
        this.customers= res.customers;
      })
    );
  }

  getCustomer(payload: any): Observable<any> {
    const url = `${this.basePath}customer/${payload}`;
    return this.http.delete(url, this.http.headers);
  }
  searchCustomer(data: any) {
    const url = `${this.basePath}customer/search/${data}`;
    return this.http.get(url, this.http.headers)
  }

}
