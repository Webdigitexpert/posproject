import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  public basePath = environment.basePath;
  public _orders;
  public _orders$: Subject<any> = new Subject();

  constructor(private http: HttpService) {}

  set orders(orders) {
    this._orders = orders;
    this._orders$.next(this._orders);
  }
  get categories() {
    return this._orders;
  }

  getOrders(): Observable<any> {
    const url = `${this.basePath}orders`;
    return this.http.get(url, this.http.headers);
  }

  postOrder(payload: any): Observable<any> {
    const url = `${this.basePath}order`;
    return this.http.post(url, payload, this.http.headers);
  }

  updateOrder(id: any, payload: any): Observable<any> {
    const url = `${this.basePath}order/${id}`;
    return this.http.put(url, payload, this.http.headers);
  }

  deleteOrder(payload: any): Observable<any> {
    const url = `${this.basePath}order/${payload}`;
    return this.http.delete(url, this.http.headers).pipe(
      tap((res) => {
        this.orders = res.orders;
      })
    );
  }

  getOrder(payload: any): Observable<any> {
    const url = `${this.basePath}order/${payload}`;
    return this.http.delete(url, this.http.headers);
  }

  OrdersCount(): Observable<any> {
    const url = `${this.basePath}order/count/all`;
    return this.http.get(url, this.http.headers);
  }

  searchOrderByDates(fromDate:any, toDate:any) {
    const url = `${this.basePath}order/date/${fromDate}&&${toDate}`;
    return this.http.get(url,this.http.headers)
  }
  searchOrderByDatesandEmployee(employee:any,fromDate:any,toDate:any) {
    const url  =`${this.basePath}order/empor/${employee}&&${fromDate}&&${toDate}`;
    return this.http.get(url,this.http.headers);
  }

  searchOrdersByEmployee(employee: any) {
    debugger
    const url = `${this.basePath}order/name/${employee}`;
    return this.http.get(url, this.http.headers);
  }

}
