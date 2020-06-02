import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    // logic 
    console.log(value, args);
    return value.substring(args[0], args[1]) + '...';
  }

}
