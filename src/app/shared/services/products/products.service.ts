import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public basePath = environment.basePath;
  public _products;
  public _products$: Subject<any> = new Subject();

  constructor(private http: HttpService) {}

  set products(products) {
    this._products = products;
    this._products$.next(this._products);
  }
  get products() {
    return this._products;
  }

  getProducts() {
    const url = `${this.basePath}products`;
    return this.http.get(url, this.http.headers).pipe(
      tap((res) => {
        this.products = res;
      })
    );
  }

  postProduct(payload: any, image: File): Observable<any> {
    console.log(payload);
    const formData = new FormData();
    formData.append('product_name', payload.product_name);
    formData.append('product_price', payload.product_price);
    formData.append('product_description', payload.product_description);
    formData.append('category_id', payload.category_id);
    formData.append('status', payload.status);
    formData.append('product_image', image);
    const url = `${this.basePath}product`;
    console.log(formData);
    return this.http.post(url, formData, this.http.headers).pipe(
      tap((res) => {
        this.products = res.products;
      })
    );
  }

  updateProduct(id: any, payload: any, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('product_name', payload.product_name);
    formData.append('product_price', payload.product_price);
    formData.append('product_description', payload.product_description);
    formData.append('category_id', payload.category_id);
    formData.append('status', payload.status);
    formData.append('product_image', image);
    const url = `${this.basePath}product/${id}`;
    return this.http.put(url, formData, this.http.headers).pipe(
      tap((res) => {
        this.products = res.products;
      })
    );
  }

  deleteProduct(payload: any): Observable<any> {
    const url = `${this.basePath}product/${payload}`;
    return this.http.delete(url, this.http.headers).pipe(
      tap((res) => {
        this.products = res.products;
      })
    );
  }

  getProduct(payload: any): Observable<any> {
    const url = `${this.basePath}product/${payload}`;
    return this.http.delete(url, this.http.headers);
  }

  getProductByCategoryId(id: any) {
    const url = `${this.basePath}/product/category/${id}`;
    return this.http.get(url, this.http.headers);
  }
}
