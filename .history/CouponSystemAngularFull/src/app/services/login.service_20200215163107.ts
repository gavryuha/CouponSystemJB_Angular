import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public token: string;
  public isLogin  = new EventEmitter<boolean>();
  public isAdmin  = new EventEmitter<boolean>();
  public isCustomer  = new EventEmitter<boolean>();
  public isCompany  = new EventEmitter<boolean>();

  constructor(private httpClient: HttpClient, private router: Router) {}

  public getLogin(email: string, password: string, userType: string ): Observable<any> {
    return this.httpClient.post('http://localhost:8080/login/?email='
     + email + '&password=' + password + '&type=' + userType.toUpperCase(), null,
      {responseType: 'text'});
  }

  public onLogin(email: string, password: string, userType: string) {
    return this.getLogin(email, password, userType).subscribe(token => {

      this.token = token;
      this.isLogin.emit(true);
      localStorage.setItem('token', token);

      switch (userType) {
        case 'ADMIN':
          this.isAdmin.emit(true);
          return this.router.navigate(['/admin']);
         case 'COMPANY':
            this.isCompany.emit(true);
            return this.router.navigate(['/company']);
        default:
            this.isCustomer.emit(true);
            return this.router.navigate(['/customer']);
      }
    },
      error => alert('Something wrong try again')
    );
  }

  public logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }



 }
