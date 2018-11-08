import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ApiProvider } from '../api/api';

/*
  Generated class for the StringWireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StringWireProvider {

  public API = 'http://localhost:8100';
  public StringApi = this.API + '/stringing_materials';
  
  constructor(public http: HttpClient) {
    // super(http);
    // this.API = this.API + '/stringing_materials';
  }

}
