import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Materials } from '../../EnumMaterial';

/*
  Generated class for the BeadsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeadsProvider {

  public API = 'http://localhost:8080';
  public BEEDS_API = this.API + '/beads';

  constructor(public http: HttpClient) {
  }

  getAll():Observable<any>{
    return this.http.get(this.BEEDS_API);
  }

  getAllOrderByMaterial():Observable<any>{
    return this.http.get(this.BEEDS_API + '/getAllOrderByMaterial');
  }

  getAllOfMaterial(material:Materials):Observable<any>{
    return this.http.get(this.BEEDS_API,{
      params: new HttpParams().set('material',material)
    });
  }

  getBead():Observable<any>{
    return this.http.get(this.BEEDS_API + '/beads');
  }

  getAllOfMaterialAndColor(material:Materials, color:string):Observable<any>{
    let params = new HttpParams();
    params.append('material',material);
    params.append('color',color);
    return this.http.get(this.BEEDS_API + '/material/color',
    {params: params})
  }

  getAllWithQuantityLessThan(quantity:number):Observable<any>{
    return this.http.get(this.BEEDS_API, 
    {params: new HttpParams().set('quantity',quantity.toString())});
  }

  getById(id: string){
    return this.http.get(this.BEEDS_API + '/' + id);
  }

  save(bead: any):Observable<any>{
    let result : Observable<Object>;
    if(bead['href']){
      result = this.http.put(bead.href,bead);
    } else{
      result = this.http.post(this.BEEDS_API,bead);
    }
    return result;
  }

  update(id:number,bead:any):Observable<any>{
    return this.http.put(this.BEEDS_API+ '/' + id,bead);
  }

}
