import {Component} from '@angular/core';
import {Router,ActivatedRouter,Params} from '@angular/router';
import { ProductosService } from '../servicios/producto.service';
import {Producto} from '../models/producto';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'producto-agregar',
    templateUrl: '../views/producto-add.html',
    providers:[ProductosService]
})
export class ProductoAddComponent{
    public titulo : string;
    public producto: Producto;
    constructor(
        private _productoSerice: ProductosService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo = 'Crear un nuevo producto';
        this.producto = new Producto(0,'','',0,'');
    }

    ngOnInit(){
        console.log('Producto add cargado');
    }

    onSubmit(){
        console.log(this.producto);
        this._productoSerice.addProducto(this.producto).subscribe(
            response => {
                if(response.code == 200){
                    console.log(response);
                    this._router.navigate(['/home']);
                }else{
                    alert("Error al registrar producto");
                }
                
            },
            error =>{
                console.log(<any>error);
            }
        );
    }
}