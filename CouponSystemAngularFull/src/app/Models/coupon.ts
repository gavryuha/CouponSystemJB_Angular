export enum Categoty {
 TRAVELING =  1,
 FOOD = 2,
 ELECTTRICITY = 3,
 HEALTH = 4,
 SPORTS = 5,
 CAMPING = 6,
 FASHION = 7,
 STUDIES = 8
}

export class Coupon {

  public constructor(
      public id?: number,
      public title?: string,
      public startDate?: Date,
      public endDate?: Date,
      public amount?: number,
      public category?: Categoty,
      public message?: string,
      public price?: number,
      public imageURL?: string,
      ) {}

}
