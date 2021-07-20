import { PipeTransform, Pipe } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'moneypipe',
})
export class MoneyPipe implements PipeTransform {
  public stringval: any;
  public moneyType = environment.currencyFormat.name;
  transform(value: any, limit: number) {
    this.stringval = value.toString();
    if (this.moneyType == 'dollar') {
      if (this.stringval.length > limit) {
        this.stringval = value.toString();
        return this.stringval.substr(0, limit) + '$...';
      } else {
        return value + '$';
      }
    }
  }
}
