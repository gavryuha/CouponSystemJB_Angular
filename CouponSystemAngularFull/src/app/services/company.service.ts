import { Coupon } from 'src/app/models/coupon';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  private URL =  'http://localhost:8080/api/companies/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  private getToken() {
   return localStorage.getItem('token');
  }

  public createCoupon(coupon: Coupon): Observable<any> {
    return this.httpClient.post(
      this.URL + 'coupons/' + this.getToken() ,
      coupon, {responseType: 'text'});
  }

  public updateCoupon(coupon: Coupon): Observable<any> {
  return this.httpClient.put(
    this.URL + 'coupons/' + this.getToken(),
    coupon, { headers: this.headers,  responseType: 'text' });
  }

  public removeCoupon(id: number) {
  return this.httpClient.delete(
    this.URL + 'coupons/' + id + '/' + this.getToken());
  }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(
      this.URL + 'coupons/' + this.getToken());
  }

}
