import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent {

  public titulo!: string;

  constructor(private router: Router) {
    this.getRouteData();
  }

  
  getRouteData() {
    this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        /** se utiliza una aserción de tipo ‘(event): event is ActivationEnd’ en el primer operador ‘filter’ 
         *  para indicarle a TypeScript que el resultado del primer operador ‘filter’ es de tipo ‘ActivationEnd’. */
        map((event: ActivationEnd) => event.snapshot.data),
      )
      .subscribe(({titulo}) => {
        console.log(titulo);
        this.titulo = titulo
        document.title = `AdminPro - ${titulo}`;
      });
    }

}
