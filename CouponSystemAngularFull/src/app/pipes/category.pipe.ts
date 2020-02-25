import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {


  transform(category: any, args?: any): any {
     switch (category) {
      case 0:
        return 'Travling';

      case 1:
        return 'Food';

      case 2:

        return 'Electtricity';
      case 3:

        return 'Healh';

      case 4:

        return 'Sports';

      case 5:

        return 'Camping';

      case 6:

        return 'Fashion';

      case 7:

        return 'Studies';

      default:
        return 'No Category';
    }
  }

}
