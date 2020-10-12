import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosFormComponent } from './carros-form/carros-form.component';
import { FormsModule } from '@angular/forms';
import { CarrosListaComponent } from './carros-lista/carros-lista.component';


@NgModule({ 
  declarations: [CarrosFormComponent, CarrosListaComponent],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    CarrosRoutingModule,
    FormsModule
  ], exports:[
    CarrosFormComponent,
    CarrosListaComponent
  ]
})
export class CarrosModule { }
