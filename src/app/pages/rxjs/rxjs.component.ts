import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {

    const obs$ = new Observable(observer => { // Se pone con $ para indicar que es una referencia a un observable
      let i = -1;
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }
        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });

    // obs$.subscribe (
    //   valor => console.log('Subs: ', valor),
    //   error => console.warn('Error: ', error),
    //   () => console.info('Obs terminado')
    // );

    /* La sintaxis anterior está obsoleta.
       En lugar de pasar tres argumentos separados para los manejadores de ‘next’, ‘error’ y ‘complete’, 
       es conveniente pasar un solo objeto con las propiedades ‘next’, ‘error’ y ‘complete’ */

    obs$.subscribe({
      next: valor => console.log('Subs: ', valor),
      error: error => console.warn('Error: ', error),
      complete: () => console.info('Obs terminado')
    });

  }

  ngOnInit(): void {
  }

}
