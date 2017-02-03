import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TranslateService } from 'ng2-translate';

import { AboutPage } from '../pages/about/about';
import { CouplePage } from '../pages/couple/couple';
import { GroupPage } from '../pages/group/group';
import { MainPage } from '../pages/main/main';
import { SettingsPage } from '../pages/settings/settings';
import { SinglePage } from '../pages/single/single';
import { TrioPage } from '../pages/trio/trio';
import { SlidesPage } from '../pages/slides/slides';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, translate: TranslateService) {
    this.getLang(translate);
    this.showSlides();
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Main', component: MainPage },
      { title: 'Single', component: SinglePage },
      { title: 'Couple', component: CouplePage },
      { title: 'Trio', component: TrioPage },
      { title: 'Group', component: GroupPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'About', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  getLang(translate){
    try {
      let lang;
      if(localStorage.getItem('lang') != null){
        lang = localStorage.getItem('lang');
      } else {
        if(navigator.language.split('-')[0] != 'es'
          && navigator.language.split('-')[0] != 'en'
          && navigator.language.split('-')[0] != 'ca'
          && navigator.language.split('-')[0] != 'pt'){
          lang = 'en';
        } else {
          lang = navigator.language.split('-')[0];
        }
      }

      translate.setDefaultLang(lang);
      translate.use(lang);

    } catch (error) {
      console.log(error);
    }
  }

  showSlides(){
    try {
      if(localStorage.getItem('firstTime') != null){
        this.rootPage = MainPage;
      } else {
        this.rootPage = SlidesPage;
        localStorage.setItem('firstTime', 'no');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
