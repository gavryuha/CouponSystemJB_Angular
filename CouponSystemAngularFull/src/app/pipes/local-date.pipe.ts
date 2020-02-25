import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {

  transform(date: any, args?: any): any {
    return new Date(date.year, date.monthValue, date.dayOfMonth) ;
  }
}
