import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TranslateService } from 'ng2-translate';

import { MainPage } from '../main/main';

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {
  slides = [
    {
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
  rootPage: any = MainPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, translate: TranslateService) {
    translate.get('TITLESLIDE1').subscribe((res: string) => {
      this.slides[0]['title'] = res;
    });
    translate.get('DESCRIPTIONSLIDE1').subscribe((res: string) => {
      this.slides[0]['description'] = res;
    });
    translate.get('TITLESLIDE2').subscribe((res: string) => {
      this.slides[1]['title'] = res;
    });
    translate.get('DESCRIPTIONSLIDE2').subscribe((res: string) => {
      this.slides[1]['description'] = res;
    });
    translate.get('TITLESLIDE3').subscribe((res: string) => {
      this.slides[2]['title'] = res;
    });
    translate.get('DESCRIPTIONSLIDE3').subscribe((res: string) => {
      this.slides[2]['description'] = res;
    });
  }
  
  afterSlides(){
    this.navCtrl.setRoot(MainPage);
  }
}
