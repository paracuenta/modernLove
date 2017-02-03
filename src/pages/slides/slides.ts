import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MainPage } from '../main/main';

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {
  slides = [
    {
      title: "!Bienvenid@ a Modern Love!",
      description: "La app que te permitirá saber la <b>compatibilidad con otras personas</b>.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "¿Tu pareja ideal?",
      description: "¿Estás <b>enamorad@</b> de tu pareja? Introduce vuestros nombres y descubre si es la definitiva. O puede que descubras nuevos amores de una forma que nunca habías imaginado.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "¿Sol@ o en compañía?",
      description: "¿Quién te va a querer mas que tu mismo? ¿Alguna vez has imaginado estar con más de una persona... <b>al mismo tiempo</b>? Averígualo!",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  rootPage: any = MainPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  afterSlides(){
    this.navCtrl.setRoot(MainPage);
  }
}
