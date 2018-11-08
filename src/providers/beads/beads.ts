import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Materials } from '../../EnumMaterial';
// import { ApiProvider } from '../api/api';

/*
  Generated class for the BeadsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeadsProvider {

  public Api = 'http://localhost:8100';
  public BeadApi = this.Api + '/beads';

  constructor(public http: HttpClient) {
    // super(http);
    // this.BeadApi = this.BeadApi + '/beads';
  }
  
  getAllOrderByMaterial():Observable<any>{
    return this.http.get(this.BeadApi + '/getAllOrderByMaterial');
  }

  getBead():Observable<any>{
    return this.http.get(this.BeadApi + '/bead');
  }

  getAllOfMaterialAndColor(material:Materials, color:string):Observable<any>{
    let params = new HttpParams();
    params.append('material',material);
    params.append('color',color);
    return this.http.get(this.BeadApi + '/material/color',
    {params: params})
  }

  getAllWithQuantityLessThan(quantity:number):Observable<any>{
    return this.http.get(this.BeadApi, 
    {params: new HttpParams().set('quantity',quantity.toString())});
  }

  

}
