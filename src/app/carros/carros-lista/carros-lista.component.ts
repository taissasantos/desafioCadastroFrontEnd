import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrosService } from 'src/app/carros.service';
import { Carros } from '../carros';

@Component({
  selector: 'app-carros-lista',
  templateUrl: './carros-lista.component.html',
  styleUrls: ['./carros-lista.component.css']
})
export class CarrosListaComponent implements OnInit {

  carrosList: Carros[] = [];
  carroSelecionado: Carros;
  mensagemSucesso: String;
  mensagemErro: String;

  constructor(
    private service:CarrosService, 
    private router: Router) { }

  ngOnInit() : void {
    this.service.listCarros().subscribe(resposta => this.carrosList = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/carros-form'])
  }

  preparaDelecao(carros: Carros){
    this.carroSelecionado = carros;
  }

  deletarCarro(){
    this.service.deletar(this.carroSelecionado)
    .subscribe(response => 
    {this.mensagemSucesso ='Carro excluido com sucesso'
    this.ngOnInit();},
    erro => this.mensagemErro= 'Erro ao tentar excluir o carro selecionado')
  }

}
