import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FotoComponent } from '../foto/foto.component';
@Injectable()
export class FotoService {
  private url = 'http://localhost:3000/v1/fotos/';
  private cabecalho = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}
  listar(): Observable<FotoComponent[]> {
    return this.http.get<FotoComponent[]>(this.url);
  }
  cadastrar(foto: FotoComponent): Observable<MensagensServico> {
    return this.http
      .post(this.url, foto, this.cabecalho)
      .pipe(map(() => new MensagensServico(`Foto	${foto.titulo}	cadastrada	com	sucesso`)));
  }
  deletar(foto: FotoComponent): Observable<MensagensServico> {
    return this.http
      .delete(this.url + foto._id)
      .pipe(map(() => new MensagensServico(`Foto	${foto.titulo}	apagada	com	sucesso`)));
  }
  obterFoto(idFoto: string): Observable<FotoComponent> {
    return this.http.get<FotoComponent>(this.url + idFoto);
  }

  alterar(foto: FotoComponent): Observable<MensagensServico> {
    return this.http
      .put(this.url + foto._id, foto, this.cabecalho)
      .pipe(map(() => new MensagensServico(`Foto	${foto.titulo}	alterada	com	sucesso`)));
  }
}

export class MensagensServico {
  constructor(private _mensagem: string) {}
  public get mensagem(): string {
    return this._mensagem;
  }
}
