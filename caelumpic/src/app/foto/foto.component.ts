import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css'],
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.Native
})

export class FotoComponent {
  @Input() titulo: string = '';
  @Input() url: string = '';
  descricao: string = '';
  _id: string = '';
}
