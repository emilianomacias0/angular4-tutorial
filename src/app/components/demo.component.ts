import { Component } from '@angular/core';

@Component({
    selector: 'demo',
    templateUrl: '../views/demo.html'
})

export class DemoComponent{
    titulo = 'Demo Component'

    ngOnInit(){
        console.log('Componente demo cargado');
    }
}