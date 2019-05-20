import {Component} from '@angular/core';
import {Router,ActivatedRouter,Params} from '@angular/core';
import { ProductosService } from '../servicios/producto.service';

import {Producto} from '../models/producto';

@Component({
    selector: 'producto-agregar',
    templateUrl: '../views/producto-add.html',
    providers:[ProductosService]
})
export class ProductoAddComponent{
    public titulo : string;
    constructor(){
        this.titulo = 'Crear un nuevo producto';
    }

    ngOnInit(){
        console.log('Producto add cargado');
    }
}