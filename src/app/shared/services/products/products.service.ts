import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public basePath = environment.basePath

  constructor(private http: HttpService) { }

  getProducts() {
    const url = `${this.basePath}products`;
    return this.http.get(url, this.http.headers)
  }

  postProduct(payload: any): Observable<any> {
    const url = `${this.basePath}product`;
    return this.http.post(url, payload, this.http.headers);
  }

  updateProduct(id:any,payload:any): Observable<any> {
    const url = `${this.basePath}product/${id}`;
    return this.http.put(url, payload, this.http.headers);
  }

  deleteProduct(payload: any): Observable<any> {
    const url = `${this.basePath}product/${payload}`;
    return this.http.delete(url, this.http.headers);
  }

  getProduct(payload: any): Observable<any> {
    const url = `${this.basePath}product/${payload}`;
    return this.http.delete(url, this.http.headers);
  }

  getProductByCategoryId(id:any){
    const url = `${this.basePath}/product/category/${id}`;
    return this.http.get(url, this.http.headers);
  }

}


