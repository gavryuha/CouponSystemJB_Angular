import { CustomerService } from './../../services/customer.service';
import { AdminService } from './../../services/admin.service';
import { Coupon } from './../../models/coupon';
import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable,  } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})

export class CouponsComponent implements OnInit {

  public allCoupons: Coupon[];

  public constructor(private title: Title,
                     private customerService: CustomerService) {

   }

 public ngOnInit(): void {

      this.title.setTitle('Coupons Website');

      this.customerService.getAllCoupons();

      this.customerService.getAllCoupons()
     .subscribe(coupons => this.allCoupons = coupons,
      error => alert(error.message));
 }


public getAllCoupons() {
  this.customerService.getAllCoupons().subscribe(allCoupons => allCoupons = allCoupons);
}

}
