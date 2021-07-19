import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'moneypipe',
})
export class MoneyPipe implements PipeTransform {
  public stringval: any;
  transform(value: any, limit: number) {
    this.stringval = value.toString();

    if (this.stringval.length > limit) {
      this.stringval = value.toString();
      return this.stringval.substr(0, limit) + '...';
    } else {
      return value;
    }
  }
}
