import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto = new FotoComponent();
    salvar() {
        console.log(this.foto);
    }
}