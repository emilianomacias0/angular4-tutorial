import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {ModuleWithProviders} from '@angular/core';

import {HomeComponent} from './components/home.component';

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
    path: '**',
    component: HomeComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
