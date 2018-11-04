import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

/*
  Generated class for the GeneralListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralListProvider {

  public API = 'http://localhost:8080';
  public STORE_API = this.API + '/store_list';

  constructor(public http: HttpClient) {
  }

  getAll():Observable<any>{
    return this.http.get(this.STORE_API);
  }

  getOneById(id:string){
    return this.http.get(this.STORE_API + '/' + id);
  }

  getOneByTitle(title:string){
    return this.http.get(this.STORE_API,{params: new HttpParams().set('title',title)});
  }

  saveOrUpdate(store_list: any):Observable<any>{
    let result : Observable<Object>;
    if(store_list['href']){
      result = this.http.put(store_list.href, store_list);
    } else {
      result = this.http.post(this.STORE_API,store_list);
    }
    return result._catch(error => Observable.throw(error));
  }
  
}
