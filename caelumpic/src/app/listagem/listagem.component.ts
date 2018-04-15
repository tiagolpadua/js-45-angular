import { Component, Input } from '@angular/core';
import { FotoService } from '../foto/foto.service'
import { FotoComponent } from '../foto/foto.component';

@Component({
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  title: string = 'Caelum Pic';
  fotos: Object[] = [];
  constructor(servico: FotoService) {
    servico.listar()
      .subscribe(
        fotos => this.fotos = fotos,
        erro => console.log(erro)
      );
  }

  remover(foto: FotoComponent): void {
    console.log(foto.titulo);
  }
}
