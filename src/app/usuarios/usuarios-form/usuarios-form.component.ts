import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Usuario} from '../usuario'
import { UsuariosService} from '../../usuarios.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario: Usuario;
  sucess: boolean = false;
  erros: String[];
  id:number;

  constructor( 
    private service: UsuariosService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams =>{
      this.id = urlParams[ 'id'];
      if(this.id){
        this.service.getUsuariosById(this.id)
        .subscribe(response => this.usuario = response,
          errorResponse => this.usuario = new Usuario())
      }     
    })    
  }

  voltar(){
    this.router.navigate(['/usuarios-list'])
  }

  onSubmit(){

    if(this.id){
      this.service.atualizar(this.usuario).subscribe(response =>{
        this.sucess= true;
      })

    } else{
      this.service.salvar(this.usuario).subscribe(response => {
        this.sucess= true;
        this.usuario = response;
      }) 
    }


  }

}
