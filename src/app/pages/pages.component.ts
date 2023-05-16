import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent {

  public linkTheme = document.querySelector('#theme');

  constructor( private router: Router ) { }

  ngOnInit(): void {
    
    this.linkTheme?.setAttribute('href', localStorage.getItem('theme') || './assets/css/colors/default.css');
    
  }

}
