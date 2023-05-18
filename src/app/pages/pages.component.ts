import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): number;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent {

  constructor( private router: Router, 
               private SettingsService: SettingsService ) { }

  ngOnInit(): void {
    
    customInitFunctions();
    
  }

}

