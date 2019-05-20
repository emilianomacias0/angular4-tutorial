import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {ModuleWithProviders} from '@angular/core';

import {HomeComponent} from './components/home.component';
import { ErrorComponent } from './components/error.component';
import {ProductosListComponent} from './components/productos-list.component';
import {DemoComponent} from './components/demo.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'productos',
    component: ProductosListComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
