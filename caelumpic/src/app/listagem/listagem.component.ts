import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  title: string = 'Caelum Pic';
  fotos: Object[] = [];
  constructor(http: Http) {
    http.get('http://localhost:3000/v1/fotos')
      .map(res => res.json())
      .subscribe(
      fotos => this.fotos = fotos,
      erro => console.log(erro)
      );
  }
}
