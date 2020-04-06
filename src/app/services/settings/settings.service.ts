import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    themeUrl:'assets/css/colors/default.css',
    theme: 'default'
  }

  constructor( @Inject(DOCUMENT) private _document) {
    this.uploadSettings();
   }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  uploadSettings() {
    if( localStorage.getItem('settings')){
      this.settings =JSON.parse( localStorage.getItem('settings'));
      this.applyTheme(this.settings.theme);
    }
    else{
      this.applyTheme(this.settings.theme);//default theme
    }
  }

  applyTheme( theme: string){
    let url=`assets/css/colors/${theme}.css`;
    this._document.getElementById("theme").setAttribute('href', url);
    this.settings.theme = theme;
    this.settings.themeUrl = url;
    this.saveSettings();

  }

}

interface Settings {
  themeUrl: string;
  theme: string;
}
