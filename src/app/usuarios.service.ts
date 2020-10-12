import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuarios/usuario';
import { Observable } from 'rxjs';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosListaComponent } from './usuarios/usuarios-lista/usuarios-lista.component';
import { Carros } from './carros/carros';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

 

  salvar(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/api/users', usuario);

  }

  atualizar(usuario: Usuario) : Observable<any>{
    return this.http.put<Usuario>(`http://localhost:8080/api/users/${usuario.id}`, usuario);

  }

  listClientes() : Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:8080/api/users');
  }

  getUsuariosById(id: number): Observable<Usuario>{
    return this.http.get<any>(`http://localhost:8080/api/users/${id}`)

  }

  deletar(usuario: Usuario) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/users/${usuario.id}`);

  }
  


}
