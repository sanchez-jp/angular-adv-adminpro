import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progreso: number = 25;

  getPorcentaje(): string {    
    return `${this.progreso}%`;
  }

  cambiarValor (valor: number) {   
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso += valor;
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
