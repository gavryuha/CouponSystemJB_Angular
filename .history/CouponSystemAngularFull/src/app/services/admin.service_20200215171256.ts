import { Company } from './../models/company';
import { Observable } from 'rxjs';
import { Customer } from './../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private URL =  'http://localhost:8080/admin/';

  constructor(private httpClient: HttpClient) { }

   headers = new HttpHeaders({
    'Content-Type': 'application/json'
    });

  private getToken() {
    return localStorage.getItem('token');
  }

public getAllCustomers(): Observable<Customer[]> {
  return this.httpClient.get<Customer[]>(
   this.URL + 'getAllCustomers/' + this.getToken());
}


public getAllCompanies(): Observable<Company[]> {
  return this.httpClient.get<Company[]>(
    this.URL + 'getAllCompanies/' + this.getToken());
}

public addCustomer(customer: Customer): Observable<any> {
  return this.httpClient.post (
    this.URL + 'customers/' + this.getToken() ,
    customer, { responseType: 'json'});
}

public addCompany(company: Company): Observable<any> {
  return this.httpClient.post (
    this.URL + 'companies/' + this.getToken() ,
    company, { headers: this.headers , responseType: 'json'});
}

public removeCustomer(id: number): Observable<any> {
  return this.httpClient.delete(
    this.URL + 'customers/' + id + '/' + this.getToken() ,
     { responseType: 'text'});
  }

public updateCustomer(customer: Customer): Observable<any> {
  return this.httpClient.put(
    this.URL + 'customers/' + this.getToken() ,
    customer, { headers: this.headers, responseType: 'text' });
}

public removeCompany(id: number): Observable<any> {
  return this.httpClient.delete(
    this.URL + 'companies/' + id + '/' + this.getToken() ,
     { responseType: 'text'});
  }

public updateCompany(company: Company): Observable<any> {
  return this.httpClient.put(
    this.URL + 'companies/' + this.getToken(),
    company, { headers: this.headers, responseType: 'text' });
}

}
