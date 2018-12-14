import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { roteamento } from './app.routes';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FotoModule } from './foto/foto.module';
import { ListagemComponent } from './listagem/listagem.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { PainelModule } from './painel/painel.module';
import { FotoService } from './servicos/foto.service';

@NgModule({
  declarations: [AppComponent, CadastroComponent, ListagemComponent, MensagemComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, FotoModule, PainelModule, roteamento, ReactiveFormsModule],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
