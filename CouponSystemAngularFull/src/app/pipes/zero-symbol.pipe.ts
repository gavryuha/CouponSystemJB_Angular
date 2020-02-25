import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroSymbol'
})
export class ZeroSymbolPipe implements PipeTransform {

  public transform(value: any, args?: any): any {

    if (value > 0) {
      return value;
    }
    if (args) {
      return args;
    }
    return '---';
  }

}
