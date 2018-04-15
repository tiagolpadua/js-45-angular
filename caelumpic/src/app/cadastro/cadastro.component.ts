import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoComponent } from '../foto/foto.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
  servico: FotoService;
  meuForm: FormGroup;
  foto: FotoComponent = new FotoComponent();
  rota: ActivatedRoute;
  mensagem: string = '';

  constructor(service: FotoService, fb: FormBuilder, rota: ActivatedRoute) {
    this.rota = rota;
    this.servico = service;

    this.meuForm = fb.group({
      titulo: ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
      )],
      url: ['', Validators.required],
      descricao: [''],
    });

    this.rota.params
      .subscribe(
        parametros => {
          let id = parametros.id;
          if (id) {
            this.servico
              .obterFoto(id)
              .subscribe(
                dadosFoto => this.foto = dadosFoto
                , erro => console.log(erro)
              );
          }
        });
  }

  cadastrar(evento: Event) {
    evento.preventDefault()
    if (this.foto._id) {
      this.servico
        .alterar(this.foto)
        .subscribe(
          () => this.mensagem = `Foto ${this.foto.titulo} alterada com sucesso`,
          erro => console.log(erro)
        );
    } else {
      this.servico
        .cadastrar(this.foto)
        .subscribe(
          () => {
            this.mensagem = 'Foto salva com sucesso';
            this.foto = new FotoComponent();
          },
          erro => console.log(erro)
        );
    }
  }
}
