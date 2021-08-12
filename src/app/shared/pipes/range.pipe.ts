import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: string, limit:number): string {
    if(value.length>limit){
      return value.substr(0,limit)+"..."
    }
  return value;
  }

}
