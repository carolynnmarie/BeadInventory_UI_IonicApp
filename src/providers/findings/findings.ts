import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FindingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FindingsProvider {

  public API = 'http://localhost:8080';
  public FINDINGS_API = this.API + '/findings';

  constructor(public http: HttpClient) {
    console.log('Hello FindingsProvider Provider');
  }

}
