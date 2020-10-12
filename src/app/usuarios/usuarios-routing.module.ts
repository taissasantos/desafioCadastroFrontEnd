import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';


const routes: Routes = [
  {path: 'usuarios-form', component: UsuariosFormComponent},
  {path: 'usuarios-form/:id', component: UsuariosFormComponent},
  {path: 'usuarios-list', component: UsuariosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
