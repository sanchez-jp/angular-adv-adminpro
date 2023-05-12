import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input('valor') progreso: number = 25; // Para cambiar el nombre de la variable que se recibe
  // @Input() progreso: number = 25;

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  // getPorcentaje(): string {    
  //   return `${this.progreso}%`;
  // }

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

  validarVaor (valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      return true;
    }
    if (this.progreso <= 0 && valor < 0) {
      return true;
    }
    return false;
  }

}
