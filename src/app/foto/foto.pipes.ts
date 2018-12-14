import { Pipe } from '@angular/core';
@Pipe({
  name: 'filtroPorTitulo'
})
export class FiltroPorTitulo {
  transform(fotos, digitado) {
    console.log(fotos);
    console.log(digitado);
  }
}
