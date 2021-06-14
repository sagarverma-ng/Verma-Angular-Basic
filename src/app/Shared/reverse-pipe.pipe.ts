import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let reverseValue = '';
    for (let i = 1; i <= value.length; i++) {
      reverseValue = reverseValue + value[value.length - i];
    }
    return reverseValue;
  }

}
