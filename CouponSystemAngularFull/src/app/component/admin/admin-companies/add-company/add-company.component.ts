import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Component } from '@angular/core';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent  {

  public company: Company = new Company();

  constructor(private adminService: AdminService,
              private router: Router) { }


  addCompany() {
        this.adminService.addCompany(this.company)
      .subscribe(() => {
        alert('A New Company was created!');
        this.router.navigate(['/admin/admin-companies']);
      },
      erorr => console.log(erorr));
    }

  }
