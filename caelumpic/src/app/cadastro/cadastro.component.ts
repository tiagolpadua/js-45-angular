import { Component } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto = new FotoComponent();
    mensagem;
    formCadastro: FormGroup;
    constructor(private servico: FotoService
        , private rota: ActivatedRoute
        , private roteador: Router
        , private formBuilder: FormBuilder) {
        this.formCadastro = formBuilder.group({
            titulo: ['', Validators.required],
            url: ['', Validators.required],
            descricao: ''
        });
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
                    // agora temos um objeto disponível
                    mensagemServico => {
                        this.mensagem = mensagemServico.mensagem;
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
                    // agora temos um objeto disponível
                    mensagemServico => {
                        this.mensagem = mensagemServico.mensagem;
                        this.foto = new FotoComponent();
                    }
                    , erro => console.log(erro)
                );
        }
    }
}