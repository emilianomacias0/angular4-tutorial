import {NgModule} from '@angular/core';
import {Injectable} from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import {Producto} from '../models/producto';
import {GLOBAL} from './global';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
     
    })
  };
@Injectable()
export class ProductosService{
public url : string;
private extractData(res: Response) {
    let body = res;
    return body || { };
  }

constructor(public _http:  HttpClient){
    this.url = GLOBAL.url;
}

getProductos(){
    return this._http.get(this.url+'productos').pipe(
        map(this.extractData));
}

addProducto(producto: Producto){
    let json = JSON.stringify(producto);
    let params = 'json='+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+"producto",params,httpOptions);
}
}