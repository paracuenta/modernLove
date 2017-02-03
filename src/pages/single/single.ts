import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-single',
  templateUrl: 'single.html'
})
export class SinglePage {

  name1 ="";
  name2 ="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglePage');
  }

  get score() {
    const letters =(this.name1 + this.name2).toLowerCase();
    let sum = 0;
    for (let i=0; i<letters.length; i++){
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
  }

}
