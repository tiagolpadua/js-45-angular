import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FotoComponent } from '../foto/foto.component';
@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto = new FotoComponent();
    http: HttpClient;
    constructor(http: HttpClient) {
        this.http = http;
    }
    salvar() {
        let cabecalho = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.http
            .post('http://localhost:3000/v1/fotos'
                , this.foto
                , cabecalho
            )
            .subscribe(
                () => {
                    console.log(`Foto ${this.foto.titulo} salva com sucesso`);
                    this.foto = new FotoComponent();
                }
                , erro => console.log(erro)
            );
    }
}