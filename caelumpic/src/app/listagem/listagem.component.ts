import { Component } from '@angular/core';
import { FotoService } from '../servicos/foto.service'; // Importou FotoService
@Component({
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    title = 'Caelum Pic';
    listaFotos;
    constructor(private servico: FotoService) { // Injetou FotoService
        servico.listar()
            .subscribe(
                fotosApi => this.listaFotos = fotosApi
                , erro => console.log(erro)
            );
    }
}