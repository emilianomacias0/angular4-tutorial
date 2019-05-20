import { Component } from '@angular/core';

import { Router,ActivatedRoute, Params} from '@angular/router';

import {ProductosService} from '../servicios/producto.service';
 import {Producto} from '../models/producto';

@Component({
    selector: 'productos-list',
    templateUrl: '../views/productos-list.html',
   providers: [ProductosService]
})

export class ProductosListComponent{
    public titulo : string;
    public productos : Producto[];
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
        this._productoService.getProductos().subscribe(
            result =>{
                if(result.code == 200){
                    this.productos = result.data;
                console.log(this.productos);
                }else{
                    console.log("Error");
                }
            },
            error =>{
                console.log(error);
            }
        );
    
    }
}