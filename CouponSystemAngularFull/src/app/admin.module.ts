import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent} from './component/admin/admin.component';
import { SharedModule } from './shared.module';
import { AdminCompaniesComponent } from './component/admin/admin-companies/admin-companies.component';
import { AdminCustomersComponent } from './component/admin/admin-customers/admin-customers.component';
import { AddCustomerComponent } from './component/admin/admin-customers/add-customer/add-customer.component';
import { AddCompanyComponent } from './component/admin/admin-companies/add-company/add-company.component';

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'add-customer', component: AddCustomerComponent},
  {path: 'add-company', component: AddCompanyComponent},
  {path: 'admin-customers', component: AdminCustomersComponent},
  {path: 'admin-companies', component: AdminCompaniesComponent},
];


@NgModule({
  declarations:
  [
    AdminComponent,
    AdminCompaniesComponent,
    AdminCustomersComponent,
    AddCustomerComponent,
    AddCompanyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
