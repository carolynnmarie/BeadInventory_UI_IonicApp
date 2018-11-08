import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ApiProvider } from '../api/api';

/*
  Generated class for the FindingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FindingsProvider {

  public API = 'http://localhost:8100';
  public FindingsApi = this.API + '/findings';
  constructor(public http: HttpClient) {
    // super(http);
    // this.API = this.API + '/findings';
  }

}
