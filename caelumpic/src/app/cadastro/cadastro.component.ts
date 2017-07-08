import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
  foto: FotoComponent = new FotoComponent();
  http: Http;
  constructor(http: Http) {
    this.http = http;
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
