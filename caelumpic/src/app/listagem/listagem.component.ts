import { Component, Input } from '@angular/core';
import { FotoService } from '../foto/foto.service'
import { FotoComponent } from '../foto/foto.component';

@Component({
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  title: string = 'Caelum Pic';
  fotos: FotoComponent[] = [];
  servico: FotoService;

  constructor(servico: FotoService) {
    this.servico = servico;
    this.servico.listar()
      .subscribe(
        fotos => this.fotos = fotos,
        erro => console.log(erro)
      );
  }

  remover(foto: FotoComponent): void {
    this.servico.deletar(foto)
      .subscribe(
        () => {
          console.log('foto removida com sucesso');
          this.fotos = this.fotos.filter(f => f._id !== foto._id);
        },
        erro => console.log(erro)
      );
  }
}
