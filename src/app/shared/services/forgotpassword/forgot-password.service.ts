import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  constructor(private http: HttpClient) {}
  public basePath = environment.basePath;
  forgotPassword(email: any) {
    const url = `${this.basePath}forgot-password`;
    return this.http.post(url, email);
  }
  resetPassword(data: any) {
    const url = `${this.basePath}reset-password`;
    return this.http.post(url, data);
  }
}
