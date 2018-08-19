import { Component } from '@angular/core';
import { FotoService } from '../servicos/foto.service'; // Importou FotoService
import { FotoComponent } from '../foto/foto.component';
import { ActivatedRoute } from '@angular/router'; // Importou ActivatedRoute
@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto = new FotoComponent();
    constructor(private servico: FotoService
        , private rota: ActivatedRoute) {
        this.rota.params
            .subscribe(
                parametros => {
                    if (parametros.idFoto) {
                        this.servico
                            .obterFoto(parametros.idFoto)
                            .subscribe(fotoDaApi => this.foto = fotoDaApi);
                    }
                }
            );
    }
    salvar() {
        this.servico
            .cadastrar(this.foto) // Usou FotoService
            .subscribe(
                () => {
                    console.log(`Foto ${this.foto.titulo} salva com sucesso`);
                    this.foto = new FotoComponent();
                }
                , erro => console.log(erro)
            );
    }
}