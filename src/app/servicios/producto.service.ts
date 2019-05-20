import {NgModule} from '@angular/core';
import {Injectable} from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import {Producto} from '../models/producto';
import {GLOBAL} from './global';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

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
}