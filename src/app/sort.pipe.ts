import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false

})
export class SortPipe implements PipeTransform {


    public transform(value: any, propName: string): any {
console.log('hi hello');
console.log(propName);
console.log(value);
      return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
      return 1;
      } else {
      return -1;
      }
      });
      }

}
