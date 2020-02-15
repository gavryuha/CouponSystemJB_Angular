import { Customer } from './../../../models/customer';
import { Coupon } from './../../../models/coupon';
import { Title } from '@angular/platform-browser';
import { AdminService } from '../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})

export class AdminCustomersComponent implements OnInit {

  public allCustomers: Customer[];

  public coupon: Coupon = new Coupon();
  public customer: Customer = new Customer();
  public addCustomerButton = false;
  public editCustomerButton = false;

  public hoveredImage: string;

  public constructor(private title: Title,
                     private adminService: AdminService,
  ) {}

  public ngOnInit(): void {
   this.title.setTitle('Admin');

   this.adminService.getAllCustomers()
   .subscribe(customers => {
     this.allCustomers = customers;
   },  erorr =>
    alert('Error occured ' + erorr.message));
  }

  public edit(customer: Customer) {
    this.customer = customer;
    this.addCustomerButton = false;
    this.editCustomerButton = !this.editCustomerButton;
  }

  public remove(id: number) {
    if  (confirm('Are You Sure To Delete This Customer? ')) {
     this.adminService.removeCustomer(id).subscribe(text =>
       this.adminService.getAllCustomers(),
       error => alert(error.message));
     window.location.reload();
    }
  }

  public updateCustomer() {
    this.adminService.updateCustomer(this.customer)
    .subscribe(text => this.editCustomerButton = false,
    error => alert(error.message));
  }


}
