import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Caelum	Pic';
  listaFotos;
  constructor(http: HttpClient) {
    http
      .get('http://localhost:3000/v1/fotos')
      // .subscribe(fotosApi => (this.listaFotos = fotosApi), erro => console.log(erro));
      .subscribe(function(retorno) {
        this.listDaFotos = retorno;
      });
  }
}
