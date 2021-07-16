import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {

  public basePath = environment.basePath;

  constructor(private http: HttpService) { }

  getOrderItems(): Observable<any> {
    const url = `${this.basePath}orderitems`;
    const headers = new HttpHeaders();
    return this.http.get(url, headers);
  }

  postOrderItem(payload: any): Observable<any> {
    const url = `${this.basePath}orderitem`;
    const headers = new HttpHeaders();
    return this.http.post(url, payload, headers);
  }

  updateOrderItem(payload: any): Observable<any> {
    const url = `${this.basePath}orderitem/${payload}`;
    const headers = new HttpHeaders();
    return this.http.put(url, payload, headers);
  }

  deleteOrderItem(payload: any): Observable<any> {
    const url = `${this.basePath}orderitem/${payload}`;
    const headers = new HttpHeaders();
    return this.http.delete(url, headers);
  }

  getOrderItem(payload: any): Observable<any> {
    const url = `${this.basePath}orderitem/${payload}`;
    const headers = new HttpHeaders();
    return this.http.delete(url, headers);
  }

}
