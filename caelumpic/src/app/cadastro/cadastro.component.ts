import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
  foto: FotoComponent = new FotoComponent();
  cadastrar() {
    console.log(this.foto);
  }
}
