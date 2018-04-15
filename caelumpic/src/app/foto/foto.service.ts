import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export class MensagensServico {
    constructor(private _mensagem: string) {
    }
    public get mensagem(): string {
        return this._mensagem;
    }
}

@Injectable()
export class FotoService {
    http: Http;
    cabecalho: Headers;
    url: string = 'http://localhost:3000/v1/fotos';
    constructor(ajax: Http) {
        this.http = ajax;
        this.cabecalho = new Headers();
        this.cabecalho.append('Content-Type', 'application/json');
    }

    listar(): Observable<FotoComponent[]> {
        return this.http.get(this.url)
            .map(resposta => resposta.json());
    }

    cadastrar(foto: FotoComponent): Observable<MensagensServico> {
        return this.http.post(
            this.url
            , JSON.stringify(foto)
            , { headers: this.cabecalho }
        ).map(
            () => new MensagensServico(`Foto ${foto.titulo} cadastrada com sucesso`)
        );
    }

    deletar(foto: FotoComponent): Observable<Response> {
        return this.http.delete(`${this.url}/${foto._id}`);
    }

    obterFoto(id: string): Observable<FotoComponent> {
        return this.http
            .get(`${this.url}/${id}`)
            .map(resposta => resposta.json());
    }

    alterar(foto: FotoComponent): Observable<MensagensServico> {
        return this.http
            .put(`${this.url}/${foto._id}`
                , JSON.stringify(foto)
                , { headers: this.cabecalho }
            ).map(
                () => new MensagensServico(`Foto ${foto.titulo} alterada com sucesso`)
            );
    }
}
