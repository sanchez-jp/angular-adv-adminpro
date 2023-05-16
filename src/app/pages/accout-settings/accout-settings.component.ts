import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: [
  ]
})
export class AccoutSettingsComponent {
  
  public linkTheme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
    
  }

  changeTheme( theme: string ) {   
    
    // document.querySelector('#theme')?.setAttribute('href', `./assets/css/colors/${ theme }.css`);
    const url = `./assets/css/colors/${ theme }.css`;

    if (this.linkTheme) {
      this.linkTheme.setAttribute('href', url);
      localStorage.setItem('theme', url);
    }

  }

}
