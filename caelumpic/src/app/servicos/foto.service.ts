import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importou map!
import { FotoComponent } from '../foto/foto.component';

@Injectable()
export class FotoService {
    private url = 'http://localhost:3000/v1/fotos/';
    private cabecalho = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http: HttpClient) { }
    listar(): Observable<FotoComponent[]> {
        return this.http.get<FotoComponent[]>(this.url);
    }
    cadastrar(foto: FotoComponent): Observable<Object> {
        return this.http
            .post(this.url, foto, this.cabecalho)
            .pipe(
                map(
                    () => ({ mensagem: `Foto ${foto.titulo} salva com sucesso` })
                )
            );
    }
    deletar(foto: FotoComponent): Observable<Object> {
        return this.http
            .delete(this.url + foto._id)
            .pipe(
                map(
                    () => ({ mensagem: `Foto ${foto.titulo} apagada com sucesso` })
                )
            );
    }
    obterFoto(idFoto: string): Observable<FotoComponent> {
        return this.http.get<FotoComponent>(this.url + idFoto);
    }
    // Implementação do método alterar
    alterar(foto: FotoComponent): Observable<Object> {
        return this.http
            .put(this.url + foto._id, foto, this.cabecalho)
            .pipe(
                map(
                    () => ({ mensagem: `Foto ${foto.titulo} atualizada com sucesso` })
                )
            );
    }
}