import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrosFormComponent } from './carros-form/carros-form.component';
import { CarrosListaComponent } from './carros-lista/carros-lista.component';


const routes: Routes = [
  {path: 'carros-form', component: CarrosFormComponent},
  {path: 'carros-form/:id', component: CarrosFormComponent},
  {path: 'carros-list', component: CarrosListaComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
