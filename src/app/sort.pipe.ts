import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false

})
export class SortPipe implements PipeTransform {

  i;
  result = [];
  public transform(value: any, propName: string, filterName: number): any {
   // console.log('hi hello');

    // console.log(propName);
    // console.log(filterName);
    // console.log(value);
    if (propName === 'taskname' || (propName === 'priority')) {
      return value.sort((a, b) => {
        if (a[propName] > b[propName]) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    if (propName === 'filter') {
      this.result = [];
      for (const v of value) {
        if (v.priority === +filterName) {
          this.result.push(v);
        }
      }
      return this.result;
    }
  }
}

