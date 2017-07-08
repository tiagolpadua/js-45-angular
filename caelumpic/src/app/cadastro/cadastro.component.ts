import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
  http: Http;
  meuForm: FormGroup;
  foto: FotoComponent = new FotoComponent();

  constructor(http: Http, fb: FormBuilder) {
    this.http = http;
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
    this.http.post('http://localhost:3000/v1/fotos', JSON.stringify(this.foto), { headers: headers })
      .subscribe(() => {
        this.foto = new FotoComponent();
        console.log('Foto salva com sucesso');
      }, erro => console.log(erro));
  }
}
