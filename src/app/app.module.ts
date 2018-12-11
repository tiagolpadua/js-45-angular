import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
@NgModule({
  declarations: [AppComponent, CadastroComponent, ListagemComponent],
  imports: [BrowserModule, HttpClientModule, FotoModule, PainelModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
