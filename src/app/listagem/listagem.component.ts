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
  mensagem: string;
  constructor(private servico: FotoService) {
    servico.listar().subscribe(fotosApi => (this.listaFotos = fotosApi), erro => console.log(erro));
  }

  remover(foto: FotoComponent): void {
    this.servico.deletar(foto).subscribe(
      () => {
        this.mensagem = `Foto	${foto.titulo}	apagada	com	sucesso!`;
        this.listaFotos = this.listaFotos.filter(f => f._id !== foto._id); // Usando	filter
        setTimeout(() => (this.mensagem = ''), 2000);
      },
      erro => console.log(erro)
    );
  }
}
