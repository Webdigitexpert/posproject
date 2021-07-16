import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public basePath = environment.basePath;

  constructor(private http: HttpService) { }

  getOrders(): Observable<any> {
    const url = `${this.basePath}orders`;
    return this.http.get(url, this.http.headers);
  }

  postOrder(payload: any): Observable<any> {
    const url = `${this.basePath}order`;
    return this.http.post(url, payload, this.http.headers);
  }

  updateOrder(id:any,payload:any): Observable<any> {
    const url = `${this.basePath}order/${id}`;
    return this.http.put(url, payload, this.http.headers);
  }

  deleteOrder(payload: any): Observable<any> {
    const url = `${this.basePath}order/${payload}`;
    return this.http.delete(url, this.http.headers);
  }

  getOrder(payload: any): Observable<any> {
    const url = `${this.basePath}order/${payload}`;
    return this.http.delete(url, this.http.headers);
  }

}
