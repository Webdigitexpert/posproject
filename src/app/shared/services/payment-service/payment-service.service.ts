import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  public basePath = environment.basePath


  constructor(private http:HttpService) { }

  createPayment(data) {
    const url = `${this.basePath}createpayments`
    return this.http.post( url , data, this.http.headers)
  }
}
