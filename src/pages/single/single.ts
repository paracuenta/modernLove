import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-single',
  templateUrl: 'single.html'
})
export class SinglePage {

  name1 ="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  get score() {
    const letters =(this.name1).toLowerCase();
    let sum = 0;
    for (let i=0; i<letters.length; i++){
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
  }

}
