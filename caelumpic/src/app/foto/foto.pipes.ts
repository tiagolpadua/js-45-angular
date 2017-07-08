import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
  // defininado os tipos de todos parâmetros, inclusive o retorno de transform
  transform(fotos: any, digitado: string): any {
    console.log(fotos); // quem deve ser filtrado
    console.log(digitado); // o que deve ser usado como filtro
  }
}
