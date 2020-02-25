import { CustomerDetailsComponent } from './component/customer/customer-details/customer-details.component';
import { CustomerComponent } from './component/customer/customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CouponDetailsComponent } from './component/coupon-details/coupon-details.component';
import { AddCouponComponent } from './component/add-coupon/add-coupon.component';
import { CouponsComponent } from './component/coupons/coupons.component';
import { CompanyComponent } from './component/company/company.component';
import { MyCouponsComponent } from './component/my-coupons/my-coupons.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'home', component: MainComponent},
    {path: 'coupons' , component: CouponsComponent},
    {path: 'coupon-details/:id' , component: CouponDetailsComponent},
    {path: 'add-coupon', component: AddCouponComponent},
    {path: 'customer', component: CustomerComponent},
    {path: 'customer-datails/:id', component: CustomerDetailsComponent},
    {path: 'company', component: CompanyComponent},
    {path: 'my-coupons', component: MyCouponsComponent},
    {path: 'about', component: AboutComponent},

    // lazy loading
    {path: 'admin', loadChildren: './admin.module#AdminModule'},

    {path: '', pathMatch: 'full', redirectTo: '/home'},
    // must be the last ->
    {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
