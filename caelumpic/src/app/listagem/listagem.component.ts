import { Component } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';
@Component({
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    title = 'Caelum Pic';
    listaFotos;
    mensagem: string;
    constructor(private servico: FotoService) {
        servico.listar()
            .subscribe(
                fotosApi => this.listaFotos = fotosApi
                , erro => console.log(erro)
            );
    }
    remover(foto: FotoComponent): void {
        this.servico
            .deletar(foto)
            .subscribe(
                // agora temos um objeto disponível
                mensagemServico => {
                    this.mensagem = mensagemServico.mensagem;
                    this.listaFotos = this.listaFotos.filter(f => f._id !== foto._id);
                    setTimeout(
                        () => this.mensagem = ''
                        , 2000
                    );
                }
                , erro => console.log(erro)
            );
    }
}