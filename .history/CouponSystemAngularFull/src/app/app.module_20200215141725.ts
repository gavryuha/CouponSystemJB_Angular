import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule  } from '@angular/common/http';
import { LayoutComponent } from './component/layout/layout.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { MainComponent } from './component/main/main.component';
import { CouponsDetailsComponent } from './component/coupon-details/coupons-details.component';
import { AddCouponComponent } from './component/add-coupon/add-coupon.component';
import { CouponsComponent } from './component/coupons/coupons.component';
import { CompanyComponent } from './component/company/company.component';
import { CustomerComponent } from './component/customer/customer.component';
import { CustomerDetailsComponent } from './component/customer/customer-details/customer-details.component';
import { MyCouponsComponent } from './component/my-coupons/my-coupons.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { SharedModule } from './shared.module';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponent,
    CouponsDetailsComponent,
    CouponsComponent,
    AddCouponComponent,
    CompanyComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    MyCouponsComponent,
    AboutComponent,
    LoginComponent,
    LocalDatePipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ],

  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
