import { CustomerService } from 'src/app/services/customer.service';
import { Coupon } from './../../models/coupon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-coupons',
  templateUrl: './my-coupons.component.html',
  styleUrls: ['./my-coupons.component.css']
})
export class MyCouponsComponent implements OnInit {

  public customerCoupons: Coupon[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getMyCoupons()
    .subscribe(coupons => {
      if (coupons.length !== 0 && coupons) {
        this.customerCoupons = coupons;
      }
    },
    error => alert(error.message));

  }


}
