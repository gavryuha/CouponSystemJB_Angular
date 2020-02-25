import { Coupon } from '../../app/models/coupon';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(coupons: Coupon[], category?: number, maxPrice?: number): Coupon[] {
    if (!coupons) { return coupons; }
    if (category == -1 && !maxPrice) { return coupons; }

    if (category != -1) { coupons = coupons.filter(c => c.category == category); }
    if (maxPrice > 0) { coupons = coupons.filter(c => c.price <= maxPrice); }
    return coupons;
  }

}
