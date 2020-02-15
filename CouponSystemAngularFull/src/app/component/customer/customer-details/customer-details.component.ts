import { CustomerService } from './../../../services/customer.service';
import { Coupon } from './../../../models/coupon';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {


  public coupon: Coupon;

  public constructor() { }



}
