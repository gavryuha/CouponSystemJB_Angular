import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

public isLogin: boolean;
public isAdmin: boolean;
public isCustomer: boolean;
public isCompany: boolean;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {

    this.loginService.isLogin.subscribe(login => this.isLogin = login);
    this.loginService.isAdmin.subscribe(admin => this.isAdmin = admin);
    this.loginService.isCustomer.subscribe(customer => this.isCustomer = customer);
    this.loginService.isCompany.subscribe(company => this.isCompany = company);

    if (localStorage.getItem('type') && localStorage.getItem('token')) {
      this.isLogin = true;
​
      const type = localStorage.getItem('type');
​
      switch (type) {
        case 'ADMIN':
          this.isAdmin = true;
          break;
        case 'CUSTOMER':
            this.isCustomer = true;
            break;
        case 'COMPANY':
            this.isCompany = true;
            break;
  }

    }
  }
    onClickLogout() {
      localStorage.removeItem('token');
      localStorage.removeItem('type');
      this.loginService.isLogin.emit(false);
      this.loginService.isAdmin.emit(false);
      this.loginService.isCompany.emit(false);
      this.loginService.isCustomer.emit(false);
      this.router.navigate(['/login']);
    }

  }

