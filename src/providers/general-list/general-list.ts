import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
// import { ApiProvider } from '../api/api';

/*
  Generated class for the GeneralListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralListProvider  {

  public Api = 'http://localhost:8100';
  public StoreApi = this.Api + '/store_list';

  constructor(public http: HttpClient) {
    // super(http);
    // this.StoreApi = this.StoreApi + '/store_list';
  }
  getAll():Observable<any>{
    return this.http.get(this.StoreApi);
  }

  getOneByTitle(title:string):Observable<any>{
    return this.http.get(this.StoreApi,{params: new HttpParams().set('title',title)});
  }

  
}
