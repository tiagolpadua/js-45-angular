import { Component } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { ActivatedRoute, Router } from '@angular/router'; // Importou Router
@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto = new FotoComponent();
    constructor(private servico: FotoService
        , private rota: ActivatedRoute
        , private roteador: Router) { // Injetou Router
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
        if (this.foto._id) {
            this.servico
                .alterar(this.foto)
                .subscribe(
                    () => {
                        console.log(`Foto ${this.foto.titulo} alterada com sucesso`);
                        // Navegar após 3 segundos
                        setTimeout(
                            () => this.roteador.navigate([''])
                            , 3000
                        );
                    }
                    , erro => console.log(erro)
                );
        } else {
            this.servico
                .cadastrar(this.foto)
                .subscribe(
                    () => {
                        console.log(`Foto ${this.foto.titulo} salva com sucesso`);
                        this.foto = new FotoComponent();
                    }
                    , erro => console.log(erro)
                );
        }
    }
}