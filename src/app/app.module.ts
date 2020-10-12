import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule} from './template/template.module';
import { HomeComponent } from './home/home.component'
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosService } from './usuarios.service';
import { CarrosModule } from './carros/carros.module';
import { FormsModule } from '@angular/forms';
import { CarrosService } from './carros.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    UsuariosModule,
    CarrosModule
  ],
  providers: [
    UsuariosService,
    CarrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
