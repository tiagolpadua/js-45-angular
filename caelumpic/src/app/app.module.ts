import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
@NgModule({
  imports: [
    FotoModule,
    PainelModule,
    HttpModule,
    BrowserModule,
    routing],
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
