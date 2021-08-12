import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'moneypipe',
})
export class MoneyPipe implements PipeTransform {
  transform(value: number, moneyType: string) {
    const price = value*1;
    return (price).toLocaleString('en-US', {
      style: 'currency',
      currency: moneyType
    });
    
  }
}
