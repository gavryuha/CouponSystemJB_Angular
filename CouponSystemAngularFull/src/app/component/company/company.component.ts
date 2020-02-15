import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/coupon';
import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {


  public allCoupons: Coupon[];
  public hoveredImage: string;

  // Edit Coupon
  public coupon: Coupon = new Coupon();
  public addCouponButton = false;
  public editCouponButton = false;


  @Input()
  public imageSource: string;

  public constructor(private title: Title,
                     private companyService: CompanyService,
                     ) {

   }

 public ngOnInit(): void {
    this.title.setTitle('Coupons Website');
    this.getAllCoupons();
 }

 public getAllCoupons() {
  this.companyService.getAllCoupons()
  .subscribe(coupons => {
    if (coupons.length !== 0) {
      this.allCoupons = coupons;
    }
  },
   error => alert(error.message));
 }

 public removeCoupon(id: number) {
  if  (confirm('Are You Sure To Delete This Coupon? ')) {
   this.companyService.removeCoupon(id).subscribe(text =>
    window.location.reload(),

     error => alert(error.message));
    }
  }

  public edit(coupon: Coupon) {
    this.coupon = coupon;
    this.addCouponButton = false;
    this.editCouponButton = !this.editCouponButton;
  }

 public updateCoupon() {
   this.companyService.updateCoupon(this.coupon).subscribe(text => {
    this.editCouponButton = false;
    this.getAllCoupons();

    },
     error => alert(error.message));
 }

}
