import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-trio',
  templateUrl: 'trio.html'
})
export class TrioPage {

  name1 ="";
  name2 ="";
  name3 ="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  get score() {
    const letters =(this.name1 + this.name2 + this.name3).toLowerCase();
    let sum = 0;
    for (let i=0; i<letters.length; i++){
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
  }

}
