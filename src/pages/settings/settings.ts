import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TranslateService } from 'ng2-translate';

import { MainPage } from '../main/main';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  lang: any;
  rootPage: any = MainPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {
    this.getDefaults();
  }

  getDefaults(){
    if(localStorage.getItem('lang') != null){
      this.lang = localStorage.getItem('lang');
    } else {
      this.lang = navigator.language.split('-')[0];
    }
  }

  setDefaults(){
    localStorage.setItem('lang', this.lang);
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);

    this.navCtrl.setRoot(MainPage);
  }
}
