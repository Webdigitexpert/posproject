import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public basePath = environment.basePath;
  public categories

  constructor(private http: HttpService) { }

  getCategories(): Observable<any> {
    const url = `${this.basePath}categories`;
    return this.http.get(url, this.http.headers).pipe(tap(res => {
      this.categories = res
    }));
  }

  postCategory(payload: any): Observable<any> {
    const url = `${this.basePath}category`;
    return this.http.post(url, payload, this.http.headers);
  }

  updateCategory(id: any, payload: any): Observable<any> {
    const url = `${this.basePath}category/${id}`;
    return this.http.put(url, payload, this.http.headers);
  }

  deleteCategory(payload: any): Observable<any> {
    const url = `${this.basePath}category/${payload}`;
    return this.http.delete(url, this.http.headers);
  }

  getCategory(payload: any): Observable<any> {
    const url = `${this.basePath}category/${payload}`;
    return this.http.delete(url, this.http.headers);
  }

}
