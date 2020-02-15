import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private URL = 'http://localhost:8080/api/customers/';

  constructor(private httpClient: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
});

  private getToken() {
    return localStorage.getItem('token');
  }

  public getAllCoupons(): Observable<Coupon[]> {
      return this.httpClient.get<Coupon[]>
      ( this.URL + 'coupons/' + this.getToken());
    }


  public getMyCoupons(): Observable<Coupon[]> {
      return this.httpClient.get<Coupon[]>
      ( this.URL + 'customerCoupons/' + this.getToken());
    }

  public purchaseCoupon(id: number): Observable<any> {
    return this.httpClient.post(
      this.URL + 'purchaseCoupon/' + id + '/' +  this.getToken()
      , null , {  responseType: 'text'});
  }

  public getOneCoupon(id: number): Observable<Coupon> {
    return this.httpClient.get( this.URL + 'coupons/' + id + '/' +  this.getToken());
  }
}
