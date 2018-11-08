import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Materials } from '../../EnumMaterial';
import { ApiProvider } from '../api/api';


@Injectable()
export class StringWireProvider extends ApiProvider {

   public API = 'http://localhost:8080';
  // public StringApi = this.API + '/stringing_materials';
  
  constructor(public http: HttpClient) {
    super(http);
    this.API = this.API + '/stringing_materials';
  }

  // getAll():Observable<any>{
  //   return this.http.get(this.StringApi);
  // }

  // getAllOfMaterial(material:Materials):Observable<any>{
  //   return this.http.get(this.StringApi,{
  //     params: new HttpParams().set('material',material)
  //   });
  // }

  // getById(id: string){
  //   return this.http.get(this.StringApi + '/' + id);
  // }

  // save(item: any):Observable<any>{
  //   let result : Observable<Object>;
  //   if(item['href']){
  //     result = this.http.put(item.href,item);
  //   } else{
  //     result = this.http.post(this.StringApi,item);
  //   }
  //   return result._catch(error => Observable.throw(error));
  // }

  // update(id:number,item:any):Observable<any>{
  //   return this.http.put(this.StringApi+ '/' + id,item);
  // }

  // delete(id:number):Observable<any>{
  //   return this.http.delete(this.StringApi + '/' + id);
  // }
}
