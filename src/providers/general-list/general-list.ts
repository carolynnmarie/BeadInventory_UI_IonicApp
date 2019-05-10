import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiProvider } from '../api/api';


@Injectable()
export class GeneralListProvider extends ApiProvider  {

  public Api = 'http://localhost:8080';
  //public StoreApi = this.Api + '/store_list';

  constructor(public http: HttpClient) {
    super(http);
    this.Api = this.API + '/store_list'
  }
  // getAll():Observable<any>{
  //   return this.http.get(this.StoreApi);
  // }

  // getOneByTitle(title:string):Observable<any>{
  //   return this.http.get(this.StoreApi,{params: new HttpParams().set('title',title)});
  // }

  
}
