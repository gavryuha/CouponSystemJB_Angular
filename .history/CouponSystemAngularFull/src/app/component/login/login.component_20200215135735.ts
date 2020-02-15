import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

public email: string;
public password: string;
public loginType: string;

  constructor(private loginService: LoginService , private router: Router) { }

  public login(): void {
    this.loginService.onLogin(this.email , this.password, this.loginType);
    localStorage.setItem('type', this.loginType);
  }

  public logout(): void {
    this.loginService.logout();
  }

}
