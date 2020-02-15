import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryPipe } from './pipes/category.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { ZeroSymbolPipe } from './pipes/zero-symbol.pipe';
import { AboutComponent } from './component/about/about.component';
import { AddCouponComponent } from './component/add-coupon/add-coupon.component';
import { AdminComponent } from './component/admin/admin.component';
import { CompanyComponent } from './component/company/company.component';
import { CompanycouponDetailsComponent } from './component/companycoupon-details/companycoupon-details.component';
import { CouponsComponent } from './component/coupons/coupons.component';
import { CouponDetailsComponent } from './component/coupon-details/coupon-details.component';
import { CustomerComponent } from './component/customer/customer.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LayoutComponent } from './component/layout/layout.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { MenuComponent } from './component/menu/menu.component';
import { MyCouponsComponent } from './component/my-coupons/my-coupons.component';
import { ThumbnailComponent } from './component/thumbnail/thumbnail.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AdminCompaniesComponent } from './component/admin/admin-companies/admin-companies.component';
import { AdminCustomersComponent } from './component/admin/admin-customers/admin-customers.component';
import { AddCompanyComponent } from './component/admin/admin-companies/add-company/add-company.component';
import { AddCustomerComponent } from './component/admin/admin-customers/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './component/customer/customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryPipe,
    FilterPipe,
    LocalDatePipe,
    ZeroSymbolPipe,
    AboutComponent,
    AddCouponComponent,
    AdminComponent,
    CompanyComponent,
    CompanycouponDetailsComponent,
    CouponsComponent,
    CouponDetailsComponent,
    CustomerComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LoginComponent,
    MainComponent,
    MenuComponent,
    MyCouponsComponent,
    ThumbnailComponent,
    PageNotFoundComponent,
    AdminCompaniesComponent,
    AdminCustomersComponent,
    AddCompanyComponent,
    AddCustomerComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
