import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FotoComponent } from '../foto/foto.component';
export class FotoService {
  constructor(private http: HttpClient, private cabecalho, private url) {
    this.cabecalho = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.url = 'http://localhost:3000/v1/fotos/';
  }
  listar(): Observable<FotoComponent[]> {
    return this.http.get<FotoComponent[]>(this.url);
  }
}
