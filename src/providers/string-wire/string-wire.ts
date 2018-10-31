import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StringWireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StringWireProvider {

  public API = 'http://localhost:8080';
  public STRINGWIRE_API = this.API + '/stringing_materials';

  constructor(public http: HttpClient) {
    console.log('Hello StringWireProvider Provider');
  }

}
