import { Component } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';
@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
  foto = new FotoComponent();
  constructor(private servico: FotoService) {}
  salvar() {
    this.servico.cadastrar(this.foto).subscribe(
      () => {
        console.log(`Foto	${this.foto.titulo}	salva	com	sucesso`);
        this.foto = new FotoComponent();
      },
      erro => console.log(erro)
    );
  }
}
