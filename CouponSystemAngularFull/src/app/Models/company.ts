import { Coupon } from './coupon';

export class Company {

  public constructor(
    public id?: number,
    public name?: string,
    public password?: number,
    public email?: string,
    public coupons?: Coupon[]
    ) {}
}
