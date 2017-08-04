import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the UserExtractPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'userExtract',
})
export class UserExtractPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, arg) {
    let newVal: any;
    if (arg == "firstname") {
      newVal = value.name ? value.name.split(' ')[0] : '';
    } else if (arg == 'lastname') {
      newVal = value.name ? value.name.split(' ').splice(-1) : '';
    } else if (arg == "age") {
      var currentTime = new Date();
      newVal = value.birthyear ? currentTime.getFullYear() - value.birthyear : 0
    }
    // return value.toLowerCase();
    return newVal
  }
}
