import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Materials } from '../../EnumMaterial';
import { ApiProvider } from '../api/api';



@Injectable()
export class FindingsProvider extends ApiProvider {

  public API = 'http://localhost:8080';
  //public FindingsApi = this.API + '/findings';
  
  constructor(public http: HttpClient) {
    super(http);
    this.API = this.API + '/findings';
  }
  // getAll():Observable<any>{
  //   return this.http.get(this.FindingsApi);
  // }

  // getAllOfMaterial(material:Materials):Observable<any>{
  //   return this.http.get(this.FindingsApi,{
  //     params: new HttpParams().set('material',material)
  //   });
  // }

  // getById(id: string){
  //   return this.http.get(this.FindingsApi + '/' + id);
  // }

  // save(item: any):Observable<any>{
  //   let result : Observable<Object>;
  //   if(item['href']){
  //     result = this.http.put(item.href,item);
  //   } else{
  //     result = this.http.post(this.FindingsApi,item);
  //   }
  //   return result._catch(error => Observable.throw(error));
  // }

  // update(id:number,item:any):Observable<any>{
  //   return this.http.put(this.FindingsApi+ '/' + id,item);
  // }

  // delete(id:number):Observable<any>{
  //   return this.http.delete(this.FindingsApi + '/' + id);
  // }
}
