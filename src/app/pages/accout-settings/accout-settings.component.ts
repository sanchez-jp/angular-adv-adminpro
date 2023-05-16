import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: [
  ]
})
export class AccoutSettingsComponent implements OnInit {
  
  public linkTheme = document.querySelector('#theme');
  public links!: NodeListOf<Element>; // Especifica el tipo de la propiedad links como una lista de nodos de elementos

 /* La exclamación ! después del nombre de la propiedad links es un operador de aserción de no nulidad. 
    Esto le dice a TypeScript que la propiedad links nunca será null o undefined, incluso si no se le asigna un valor inicialmente.

    Este operador se utiliza a menudo para evitar errores de comprobación de nulidad cuando se sabe que una propiedad siempre tendrá 
    un valor en tiempo de ejecución, pero TypeScript no puede inferirlo por sí mismo. 
    Sin embargo, debes tener cuidado al utilizar este operador, ya que si la propiedad en realidad puede ser null o undefined 
    en tiempo de ejecución, el uso del operador de aserción de no nulidad puede ocultar errores y causar problemas en tiempo de ejecución.*/
  
    constructor() { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }

  changeTheme( theme: string ) {   
    
    // document.querySelector('#theme')?.setAttribute('href', `./assets/css/colors/${ theme }.css`);
    const url = `./assets/css/colors/${ theme }.css`;

    if (this.linkTheme) {
      this.linkTheme.setAttribute('href', url);
      localStorage.setItem('theme', url);
    }

    this.checkCurrentTheme();

  }

  checkCurrentTheme(  ) {
      

      this.links.forEach( elem => {
          
          elem.classList.remove('working');
  
          const btnTheme = elem.getAttribute('data-theme');
          const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
          const currentTheme = this.linkTheme?.getAttribute('href');
  
          if ( btnThemeUrl === currentTheme ) {
            elem.classList.add('working');
          } else {
            elem.classList.remove('working');
          }
          
        });
  
    } 

}
