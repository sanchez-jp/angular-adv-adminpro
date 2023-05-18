import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, retry, interval, take, map, filter } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs: Subscription = new Subscription;

  constructor() {

    // obs$.subscribe (
    //   valor => console.log('Subs: ', valor),
    //   error => console.warn('Error: ', error),
    //   () => console.info('Obs terminado')
    // );

    /* La sintaxis anterior está obsoleta.
       En lugar de pasar tres argumentos separados para los manejadores de ‘next’, ‘error’ y ‘complete’, 
       es conveniente pasar un solo objeto con las propiedades ‘next’, ‘error’ y ‘complete’ */

    // this.retornaObservable().pipe(
    //   retry(2) // Se reintentará la ejecución del observable en caso de error
    // ).subscribe({
    //   next: valor => console.log('Subs: ', valor),
    //   error: error => console.warn('Error: ', error),
    //   complete: () => console.info('Obs terminado')
    // });

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    /** Al destruir el componente (cambiar de vista, por ejemplo) se detiene el observable que se encuentre 
     * emitiendo valores en ese momento */
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {

    return interval(500)
      .pipe(
        map(valor => valor + 1),
        // take(10),
        filter(valor => (valor % 2 === 0) ? true : false),
      );

  }

  // retornaObservable(): Observable<number> {

  //   let i = -1;
  //   return new Observable<number>(observer => {
  //     const intervalo = setInterval(() => {
  //       i++;
  //       observer.next(i);

  //       if (i == 4) {
  //         clearInterval(intervalo);
  //         observer.complete();
  //       }

  //       // if (i == 2) {
  //       //   observer.error('i llegó al valor de 2');
  //       // }

  //     }, 1000);
  //   });

  // }

}
