import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor') progreso: number = 25;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor (valor: number) {   
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      this.valorSalida.emit(this.progreso);
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      this.valorSalida.emit(this.progreso);
      return;
    }

    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
  }

  validarValor (valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      return true;
    }
    if (this.progreso <= 0 && valor < 0) {
      return true;
    }
    return false;
  }

  onChange (nuevoValor: number) {
  
    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }

}
