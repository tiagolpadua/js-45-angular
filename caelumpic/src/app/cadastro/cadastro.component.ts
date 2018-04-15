import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
  servico: FotoService;
  meuForm: FormGroup;
  foto: FotoComponent = new FotoComponent();

  constructor(service: FotoService, fb: FormBuilder) {
    this.servico = service;

    this.meuForm = fb.group({
      titulo: ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
      )],
      url: ['', Validators.required],
      descricao: [''],
    });
  }
  cadastrar() {
    console.log(this.foto);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.servico
      .cadastrar(this.foto)
      .subscribe(() => {
        this.foto = new FotoComponent();
        console.log('Foto salva com sucesso');
      }, erro => console.log(erro));
  }
}
