import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';
export class FotoService {
  http: Http;
  headers: Headers;
  url: string = 'http://localhost:3000/v1/fotos';
  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }
  lista(): Observable<FotoComponent[]> {
    return this.http.get(this.url)
      .map(res => res.json());
  }
  cadastra(foto: FotoComponent): Observable<Response> {
    return this.http.post(this.url, JSON.stringify(foto),
      { headers: this.headers });
  }
}
