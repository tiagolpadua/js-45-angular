import { Component, Input, OnInit, ElementRef } from '@angular/core';
import * as $ from "jquery";
@Component({
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
    @Input() titulo: string;
    constructor(private elemento: ElementRef) {
    }
    ngOnInit() {
        this.titulo = this.titulo.length > 7
            ? `${this.titulo.substr(0, 7)}...`
            : this.titulo;
    }
    fadeOut(callback) {
        $(this.elemento.nativeElement).fadeOut(callback);
    }
}