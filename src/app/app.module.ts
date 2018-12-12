import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { roteamento } from './app.routes';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FotoModule } from './foto/foto.module';
import { ListagemComponent } from './listagem/listagem.component';
import { PainelModule } from './painel/painel.module';
@NgModule({
  declarations: [AppComponent, CadastroComponent, ListagemComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, FotoModule, PainelModule, roteamento],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
