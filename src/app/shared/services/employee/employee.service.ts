import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public basePath = environment.basePath;

  constructor(private http: HttpService) {}

  getEmployee(): Observable<any> {
    const url = `${this.basePath}employees`;
    return this.http.get(url, this.http.headers);
  }

  createEmployee(payload: any): Observable<any> {
    const url = `${this.basePath}employee`;
    return this.http.post(url, payload, this.http.headers);
  }

  updateEmployee(id:any,payload:any): Observable<any> {
    const url = `${this.basePath}employee/${id}`;
    return this.http.put(url, payload, this.http.headers);
  }

  deleteEmployee(payload: any): Observable<any> {
    const url = `${this.basePath}employee/${payload}`;
    return this.http.delete(url, this.http.headers);
  }

  getEmployeebyId(payload: any): Observable<any> {
    const url = `${this.basePath}employee/${payload}`;
    return this.http.delete(url, this.http.headers);
  }
}
