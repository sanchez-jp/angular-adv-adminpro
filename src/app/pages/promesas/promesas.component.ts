import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
    
    const promesa = new Promise((resolve, reject) => {
      if (false) {
        resolve('Hola mundo');
      } else {
        reject('Algo salió mal');
      }
    });

    promesa.then((mensaje) => {
      console.log(mensaje); // Devuelve: Hola mundo (lo que hay en resolve)
    }).catch((error) => {
      console.log('Error en mi promesa.', error); // Devuelve: Algo salió mal (lo que hay en reject)
    });

    console.log('Fin del Init');
    
  }
    
}
