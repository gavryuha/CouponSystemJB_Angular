import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Title } from '@angular/platform-browser';
import { Customer } from './../../../models/customer';
import { Company } from './../../../models/company';
import { Coupon } from './../../../models/coupon';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-admin-companies',
  templateUrl: './admin-companies.component.html',
  styleUrls: ['./admin-companies.component.css']
})
export class AdminCompaniesComponent implements OnInit {

  public allCoupons: Coupon[];
  public allCompanies: Company[];
  public allCustomers: Customer[];

  public company: Company = new Company();
  public addCompanyButton = false;
  public editCompanyButton = false;

  public hoveredImage: string;

  @Input()
  public imageSource: string;

  public constructor(private title: Title,
                     private adminService: AdminService,
  ) {}

  public ngOnInit(): void {
   this.title.setTitle('Admin');

   this.adminService.getAllCompanies()
     .subscribe(companies => {
       this.allCompanies = companies;
     },  erorr =>
      alert('Error occured ' + erorr.message));

  }

  public edit(company: Company) {
    this.company = company;
    this.addCompanyButton = false;
    this.editCompanyButton = !this.editCompanyButton;
  }

  public remove(id: number) {
    if  (confirm('Are You Sure To Delete This Company? ')) {
     this.adminService.removeCompany(id).subscribe(() =>
       this.adminService.getAllCompanies(),
       error => alert(error.message));
     window.location.reload();
    }
  }

  public updateCompany() {
    this.adminService.updateCompany(this.company).subscribe(() => {
      this.editCompanyButton = false;
     },
      error => alert(error.message)
    );
  }
}




