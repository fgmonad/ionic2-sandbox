import { Component } from '@angular/core';

/**
 * Generated class for the MyComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'my',
  templateUrl: 'my.html'
})
export class MyComponentComponent {

  text: string;

  constructor() {
    console.log('Hello MyComponent Component');
    this.text = 'Hello World';
  }

}
