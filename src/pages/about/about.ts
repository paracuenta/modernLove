import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SlidesPage } from '../pages/slides/slides';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  verSlides() {
    this.navCtrl.push(SlidesPage);
  }

}
