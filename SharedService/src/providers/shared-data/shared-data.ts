import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedDataProvider {
  private _name: string;
  private _age: number;

  get name(): string {
    return this._name
  }
  set name(newName: string) {
    console.log("Set name to ", newName)
    this._name = newName
  }

  get age() {
    return this._age
  }
  set age(newAge) {
    console.log("Set age to ",newAge)
    this._age = newAge
  }

  constructor() {
    console.log('Hello SharedDataProvider Provider');
  }


}

