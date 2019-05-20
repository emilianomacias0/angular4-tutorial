import { Component } from '@angular/core';

import { Router,ActivatedRoute, Params} from '@angular/router';

import {ProductosService} from '../servicios/producto.service';


@Component({
    selector: 'productos-list',
    templateUrl: '../views/productos-list.html',
   providers: [ProductosService]
})

export class ProductosListComponent{
    public titulo : string;

    constructor(
        private _route : ActivatedRoute,
        private _router : Router,
       private _productoService: ProductosService
        )
    {
            this.titulo = 'Listado de productos';
    }
    ngOnInit(){
        console.log('Productos list cargado');
        console.log(this._productoService.getProductos());
    }
}