import { CustomerService } from 'src/app/services/customer.service';
import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  public allCoupons: Coupon[];
  public hoveredImage: string;
  public maxPrice: number ;
  public categoryFilter = -1;


  public constructor(private title: Title,
                     private customerService: CustomerService) {
   }

 public ngOnInit(): void {

      this.title.setTitle('Customer');

      this.customerService.getAllCoupons()
     .subscribe(coupons => this.allCoupons = coupons,
      error => alert(error.message));

 }


}
