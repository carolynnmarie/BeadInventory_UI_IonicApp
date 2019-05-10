import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Materials } from '../../EnumMaterial';
import { ApiProvider } from '../api/api';

@Injectable()
export class BeadsProvider extends ApiProvider {

  public API = 'http://localhost:8080';
  //public BeadApi = this.Api + '/beads';

  constructor(public http: HttpClient) {
    super(http);
    this.API = this.API + '/beads';
  }

  getAll():Observable<any>{
    return this.http.get(this.API);
  }

  // getById(id: string){
  //   return this.http.get(this.BeadApi + '/' + id);
  // }
  
  getAllOrderByMaterial():Observable<any>{
    return this.http.get(this.API + '/getAllOrderByMaterial');
  }

  getBead(id:number):Observable<any>{
    let params = new HttpParams();
    params.append('id',id.toString());
    return this.http.get(this.API + '/' + id, {params:params});
  }

  getAllOfMaterial(material:Materials):Observable<any>{
    let params = new HttpParams();
    params.append('material',material);
    return this.http.get(this.API = '/material',
    {params:params})
  }

  getAllOfColor(color:string):Observable<any>{
    let params = new HttpParams();
    params.append('color', color);
    return this.http.get(this.API + '/color', {params:params});
  }

  getAllOfMaterialAndColor(material:Materials, color:string):Observable<any>{
    let params = new HttpParams();
    params.append('material',material);
    params.append('color',color);
    return this.http.get(this.API + '/material/color',
    {params: params})
  }

  getAllWithQuantityLessThan(quantity:number):Observable<any>{
    return this.http.get(this.API, 
    {params: new HttpParams().set('quantity',quantity.toString())});
  }

  // updateOne(bead:any, id:number):Observable<any>{
  //   return this.http.put()
  // }


}
