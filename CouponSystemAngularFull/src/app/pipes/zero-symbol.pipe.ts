import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroSymbol'
})
export class ZeroSymbolPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
