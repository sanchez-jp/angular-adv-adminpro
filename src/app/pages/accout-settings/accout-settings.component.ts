import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: [
  ]
})
export class AccoutSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: string) {

    this.settingsService.changeTheme(theme);

    this.settingsService.checkCurrentTheme();

  }

}
