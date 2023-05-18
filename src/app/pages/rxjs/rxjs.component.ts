import { Component, OnInit } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {
    
    let i = -1;

    const obs$ = new Observable(observer => { // Se pone con $ para indicar que es una referencia a un observable
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          console.log('i = 2..... error');
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

    obs$.pipe(
      retry(2) // Se reintentará la ejecución del observable en caso de error
    ).subscribe({
      next: valor => console.log('Subs: ', valor),
      error: error => console.warn('Error: ', error),
      complete: () => console.info('Obs terminado')
    });

  }

  ngOnInit(): void {
  }

}
