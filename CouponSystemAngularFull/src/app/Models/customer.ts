import { Coupon } from './coupon';

export class Customer {

  public constructor(
    public id?: number,
    public name?: string,
    public email?: string,
    public password?: number,
    public coupons?: Coupon[]
    ) {}
}
