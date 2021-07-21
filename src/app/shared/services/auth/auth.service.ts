import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public basePath = environment.basePath

  login(data:any) {
    const url = `${this.basePath}login`
    return this.http.post(url, data)
  }
  getToken() {
    return localStorage.getItem('token')
  }

}
