import { Component } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto = new FotoComponent();
    mensagem; // Nova propriedade
    constructor(private servico: FotoService
        , private rota: ActivatedRoute
        , private roteador: Router) {
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
                        // Mensagem de alteração
                        this.mensagem = `Foto ${this.foto.titulo} alterada com sucesso`;
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
                        // Mensagem de inserção
                        this.mensagem = `Foto ${this.foto.titulo} salva com sucesso`;
                        this.foto = new FotoComponent();
                    }
                    , erro => console.log(erro)
                );
        }
    }
}