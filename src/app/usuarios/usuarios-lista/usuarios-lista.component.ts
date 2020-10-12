import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService} from '../../usuarios.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  usuariosList: Usuario[] = [];
  usuarioSelecionado: Usuario;
  mensagemSucesso: String;
  mensagemErro: String;

  constructor(
    private service:UsuariosService, 
    private router: Router) { }

  ngOnInit() : void {
    this.service.listClientes().subscribe(resposta => this.usuariosList = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/usuarios-form'])
  }

  preparaDelecao(usuario: Usuario){
    this.usuarioSelecionado = usuario;
  }

  deletarUsuario(){
    this.service.deletar(this.usuarioSelecionado)
    .subscribe(response => 
    {this.mensagemSucesso ='Usuário excluido com sucesso'
    this.ngOnInit();},
    erro => this.mensagemErro= 'Erro ao tentar excluir o usuario')
  }


}
