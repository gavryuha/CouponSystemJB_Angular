import { CustomerService } from 'src/app/services/customer.service';
import { Coupon } from '../../models/coupon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coupons-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.css']
})
export class CouponDetailsComponent implements OnInit {


  public coupon: Coupon;

  public id: number;

  public constructor(
    private activetedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private route: Router) { }


    ngOnInit() {
      this.id = +this.activetedRoute.snapshot.params.id;

      this.customerService.getOneCoupon(this.id)
      .subscribe(coupon => this.coupon = coupon,
        error => alert(error.message));
    }

    onPurchaseCoupon() {
      this.customerService.purchaseCoupon(this.id)
      .subscribe( text => {
       alert('A coupon has purchase successfully!');
       this.route.navigate(['/my-coupons']);
      },
      error => alert('This coupon already purchase!'));
    }
}
