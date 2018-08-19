import { Component, Input } from '@angular/core';
@Component({
    selector: 'mensagem',
    template: `<p class="alert alert-{{tipo}}"><ng-content></ng-content></p>` // Adicionou o template
})
export class MensagemComponent {
    @Input() tipo = 'light';
}