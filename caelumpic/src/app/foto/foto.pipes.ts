import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';
@Pipe({
  name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
  // defininado os tipos de todos parâmetros, inclusive o retorno de transform
  transform(fotos: FotoComponent[], digitado: string): FotoComponent[] {
    digitado = digitado.toLowerCase();
    return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
  }
}
