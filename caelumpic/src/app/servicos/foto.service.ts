import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FotoComponent } from '../foto/foto.component';
@Injectable()
export class FotoService {
    // Atributos declarados no corpo da classe
    private url = 'http://localhost:3000/v1/fotos/';
    private cabecalho = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // Construtor apenas com a injeção de HttpClient
    constructor(private http: HttpClient) { }
    listar(): Observable<FotoComponent[]> {
        return this.http.get<FotoComponent[]>(this.url);
    }
}