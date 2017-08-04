import { Component } from '@angular/core';

/**
 * Generated class for the FooComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'my-component',
  templateUrl: 'foo.html'
})
export class MyComponent {
  public data:any = { myToggle: true }

  text: string;
  isClicked(val) {
    console.log("Vegetarian: "+ val)
  }

  constructor() {
    console.log('Hello FooComponent Component');
    this.text = 'Hello World';
  }

}
