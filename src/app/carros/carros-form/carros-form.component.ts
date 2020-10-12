import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarrosService } from 'src/app/carros.service';
import { Carros } from '../carros';

@Component({
  selector: 'app-carros-form',
  templateUrl: './carros-form.component.html',
  styleUrls: ['./carros-form.component.css']
})
export class CarrosFormComponent implements OnInit {

  carros: Carros;
  sucess: boolean = false;
  erros: String[];
  id:number;

  constructor( 
    private service: CarrosService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    this.carros = new Carros();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams =>{
      this.id = urlParams[ 'id'];
      if(this.id){
        this.service.getCarrosById(this.id)
        .subscribe(response => this.carros = response,
          errorResponse => this.carros = new Carros())
      }     
    })    
  }

  voltar(){
    this.router.navigate(['/carros-list'])
  }

  onSubmit(){

    if(this.id){
      this.service.atualizar(this.carros).subscribe(response =>{
        this.sucess= true;
      })

    } else{
      this.service.salvar(this.carros).subscribe(response => {
        this.sucess= true;
        this.carros = response;
      }) 
    }


  }

}
