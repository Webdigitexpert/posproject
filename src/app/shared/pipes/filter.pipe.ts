import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: string = '', filterString: any, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if ((item[propName] as string).toLowerCase().includes((filterString as string).toLowerCase())) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}
