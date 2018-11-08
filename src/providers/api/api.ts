import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Materials } from '../../EnumMaterial';

@Injectable()
export class ApiProvider {

  public API = 'http://localhost:8080';

  constructor(public http: HttpClient) {
  }

  getAll():Observable<any>{
    return this.http.get(this.API);
  }

  getAllOfMaterial(material:Materials):Observable<any>{
    return this.http.get(this.API,{
      params: new HttpParams().set('material',material)
    });
  }

  getById(id: string){
    return this.http.get(this.API + '/' + id);
  }

  save(item: any):Observable<any>{
    let result : Observable<Object>;
    if(item['href']){
      result = this.http.put(item.href,item);
    } else{
      result = this.http.post(this.API,item);
    }
    return result._catch(error => Observable.throw(error));
  }

  update(id:number,item:any):Observable<any>{
    return this.http.put(this.API+ '/' + id,item);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(this.API + '/' + id);
  }

}
