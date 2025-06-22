import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortPipeTs'
})
export class ShortPipeTsPipe implements PipeTransform {

  transform(value: string, length:number): unknown {
    if (value.length < length) {
      return value;
    } else {
      return `${value.substring(0,length) }...`;
    }
  }
}
