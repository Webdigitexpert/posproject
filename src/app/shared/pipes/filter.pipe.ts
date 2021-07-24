import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: string, filterString: any, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    debugger;
    for (const item of value) {
      if (item[propName].includes(filterString)) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}
