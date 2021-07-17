import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public headers = new HttpHeaders({
    Authorization: `Bearer ${environment.token}`
  });
  constructor(private httpClient: HttpClient) { }

  public get(urlString: string, headers: HttpHeaders): Observable<any> {
    const url = urlString;
    return this.httpClient.get(url, { headers });
  }

  public post(urlString: string, payload, headers: HttpHeaders): Observable<any> {
    const url = urlString;
    return this.httpClient.post(url, payload, { headers });
  }

  public delete(urlString: string, headers: HttpHeaders): Observable<any> {
    const url = urlString;
    return this.httpClient.delete(url, { headers });
  }

  public put(urlString: string, payload, headers: HttpHeaders): Observable<any> {
    const url = urlString;
    return this.httpClient.put(url, payload, { headers });
  }

}
