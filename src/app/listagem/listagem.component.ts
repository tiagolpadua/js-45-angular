import { Component } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';
@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  title = 'Caelum	Pic';
  listaFotos;
  constructor(private servico: FotoService) {
    servico.listar().subscribe(fotosApi => (this.listaFotos = fotosApi), erro => console.log(erro));
  }
  remover(foto: FotoComponent): void {
    this.servico
      .deletar(foto)
      .subscribe(() => console.log(`Foto	${foto.titulo}	apagada	com	sucesso!`), erro => console.log(erro));
  }
}
