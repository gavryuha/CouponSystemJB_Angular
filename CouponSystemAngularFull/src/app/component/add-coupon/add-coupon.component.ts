import { Router } from '@angular/router';
import { CompanyService } from './../../services/company.service';
import { Coupon } from '../../models/coupon';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent {

  public coupon: Coupon = new Coupon();

  constructor(private companyService: CompanyService,
              private router: Router) { }

  public addCoupon(): void  {
      this.companyService.createCoupon(this.coupon)
    .subscribe(coupon => this.coupon = coupon,
      erorr => alert('Error occured ' + erorr.message ),
      () => {
      alert('A coupon has been added successfully added!');
      this.router.navigate(['/company']);
      });
  }

}

