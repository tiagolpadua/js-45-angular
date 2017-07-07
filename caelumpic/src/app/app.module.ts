import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { HttpModule } from '@angular/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
@NgModule({
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule,
    PainelModule],
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
