import { Router } from '@angular/router';
import { Customer } from './../../../../models/customer';
import { AdminService } from './../../../../services/admin.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  public customer: Customer = new Customer();

  constructor(private adminService: AdminService,
              private router: Router) { }

  addCustomer() {
    this.adminService.addCustomer(this.customer)
    .subscribe(() => {
      alert('A New Customer was created!');
      this.router.navigate(['/admin/admin-customers']);
    },
       erorr => alert(erorr.error.status + ' : ' + erorr.error.message));
    }

  }
