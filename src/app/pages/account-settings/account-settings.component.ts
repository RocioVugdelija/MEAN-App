import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _settings: SettingsService) { }

  ngOnInit() {
    this.setCheck();
  }

  changeColor(theme: string, link: any){
    this.applyCheck(link);
    this._settings.applyTheme(theme);
   
  }

  applyCheck(link: any) {

    let selectors: any = document.getElementsByClassName("selector");
    for (let ref of selectors){
      ref.classList.remove('working');
    }
    link.classList.add('working');

  }
  
  setCheck() {
    let theme = this._settings.settings.theme;
    let selectors: any = document.getElementsByClassName("selector");
    for (let ref of selectors){
      if(ref.getAttribute('data-theme') === theme){
        ref.classList.add('working');
        break;
      }
    }

  }

}
