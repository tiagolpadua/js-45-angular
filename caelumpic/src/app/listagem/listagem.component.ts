import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  fotos: FotoComponent[] = [];
  service: FotoService;
  constructor(service: FotoService) {
    this.service = service;
    this.service.lista()
      .subscribe(
      fotos => this.fotos = fotos,
      erro => console.log(erro)
      );
  }
  remove(foto: FotoComponent): void {
    this.service.remove(foto)
      .subscribe(
      (fotos) => {
        let novasFotos = this.fotos.slice(0);
        let indice = novasFotos.indexOf(foto);
        novasFotos.splice(indice, 1);
        this.fotos = novasFotos;
        console.log('Foto removida com sucesso');
      },
      erro => console.log(erro)
      );
  }
}
