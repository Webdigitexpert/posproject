import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public basePath = environment.basePath;
  public _employees;
  public _employees$: Subject<any> = new Subject();

  constructor(private http: HttpService) {}

  set employees(employees) {
    this._employees = employees;
    this._employees$.next(this._employees);
  }
  get employees() {
    return this._employees;
  }

  getEmployee(): Observable<any> {
    const url = `${this.basePath}employees`;
    return this.http.get(url, this.http.headers).pipe(tap(res => {
      this.employees = res
    }));;
  }

  createEmployee(payload: any): Observable<any> {
    const url = `${this.basePath}employee`;
    return this.http.post(url, payload, this.http.headers)
    .pipe(
      tap(res => {
        this.employees = res.employees
      })
    );
  }

  updateEmployee(id:any,payload:any): Observable<any> {
    const url = `${this.basePath}employee/${id}`;
    return this.http.put(url, payload, this.http.headers)
    .pipe(
      tap(res => {
        this.employees = res.employees
      })
    );
  }

  deleteEmployee(payload: any): Observable<any> {
    const url = `${this.basePath}employee/${payload}`;
    return this.http.delete(url, this.http.headers)
    .pipe(
      tap(res => {
        this.employees = res.employees
      })
    );
  }

  getEmployeebyId(payload: any): Observable<any> {
    const url = `${this.basePath}employee/${payload}`;
    return this.http.get(url, this.http.headers);
  }

}
