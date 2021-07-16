import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})


export class CustomerService {



  public basePath = environment.basePath;
  public customers

  constructor(private http: HttpService) { }


  getCustomers(): Observable<any> {
    const url = `${this.basePath}customers`;
    return this.http.get(url, this.http.headers);
  }

  postCustomer(payload: any): Observable<any> {
    const url = `${this.basePath}customer/`;
    return this.http.post(url, payload, this.http.headers);
  }

  updateCustomer(payload: any): Observable<any> {
    const url = `${this.basePath}customer/${payload}`;
    return this.http.put(url, payload, this.http.headers);
  }

  deleteCustomer(payload: any): Observable<any> {
    const url = `${this.basePath}customer/${payload}`;
    return this.http.delete(url, this.http.headers).pipe((tap(res=>{
      this.customers = res
    })));
  }

  getCustomer(payload: any): Observable<any> {
    const url = `${this.basePath}customer/${payload}`;
    return this.http.delete(url, this.http.headers);
  }
  searchCustomer(data:any) {
    const url = `${this.basePath}customer/search/${data}`;
    return this.http.get(url,this.http.headers)
  }
  
}
