import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carros } from './carros/carros';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private http: HttpClient) { }

  salvar(carros: Carros) : Observable<Carros>{
    return this.http.post<Carros>('http://localhost:8080/api/cars', carros);

  }

  atualizar(carros: Carros) : Observable<any>{
    return this.http.put<Carros>(`http://localhost:8080/api/cars/${carros.id}`, carros);

  }

  listCarros() : Observable<Carros[]>{
    return this.http.get<Carros[]>('http://localhost:8080/api/cars');
  }

  getCarrosById(id: number): Observable<Carros>{
    return this.http.get<any>(`http://localhost:8080/api/cars/${id}`)

  }

  deletar(carros: Carros) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/cars/${carros.id}`);

  }
  
}
